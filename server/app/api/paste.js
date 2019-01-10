const router = require('express').Router();
const mongoose = require('mongoose');
const Paste = require('../../db/models/paste');
const File = require('../../db/models/file');
const Terminal = require('../../db/models/terminal');
const Short = require('../../db/models/short');

router.get('/:short', (req, res, next) => {
  Paste.findOne({
    short: req.params.short,
    version: 0,
  })
    .populate('files')
    .populate('terminal')
    .then((paste) => {
      if (paste) {
        res.json(paste);
      } else {
        const err = new Error(`Paste not found with short: ${req.params.short}`);
        err.status = 404;
        throw err;
      }
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/:short/:version', (req, res, next) => {
  Paste.findOne({
    short: req.params.short,
    version: req.params.version,
  })
    .populate({
      path: 'files',
      populate: {
        path: 'root',
        model: 'File',
      },
    })
    .populate({
      path: 'terminal',
      populate: {
        path: 'root',
        model: 'Terminal',
      },
    })
    .then((paste) => {
      if (!paste) {
        const err = new Error(`Paste not found with short ${req.params.short} and version ${req.params.version}`);
        err.status = 404;
        throw err;
      }

      const terminal = paste.terminal.root;
      paste.terminal.root = !paste.terminal.root ? null : paste.terminal.root._id;

      const files = paste.files.map(file => file.root);
      paste.files.forEach((file) => {
        file.root = !file.root ? null : file.root._id;
      });

      res.json({
        paste,
        root: {
          files,
          terminal,
        }
      });
    })
    .catch((err) => {
      next(err);
    });
});

/*
  Request has
  {
    terminal
    files: array of File,
    title,
    description
  }
*/
router.post('/', (req, res, next) => {
  let createdPaste;
  let newFiles;
  let newTerminal;
  let newPaste;
  Short.create({})
    .then(({ short }) => {
      // Create a new File for each file
      newFiles = req.body.files.map(file => new File({
        title: file.title,
        body: file.body,
        syntax: file.syntax,
      }));

      newTerminal = new Terminal({
        body: req.body.terminal.body,
      });

      newPaste = new Paste({
        short,
        title: req.body.title,
        description: req.body.description,
        version: 0,
      });

      // Map paste's files to each file.id
      newPaste.files = newFiles.map(file => file._id);
      newPaste.terminal = newTerminal._id;

      return newPaste.save();
    })
    .then((dbPaste) => {
      createdPaste = dbPaste;
      return Promise.all(newFiles.map(file => file.save()));
    })
    .then((dbFiles) => {
      createdPaste.files = dbFiles;
      return newTerminal.save();
    })
    .then((dbTerminal) => {
      createdPaste.terminal = dbTerminal;
      res.status(201).json(createdPaste);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/:short', (req, res, next) => {
  let newFiles;
  let createdPaste;
  let newTerminal;

  Short.findOne({
    short: req.params.short,
  })
    .then((short) => {
      if (!short) {
        const err = new Error(`Not found: ${req.params.short}`);
        err.status = 404;
        throw err;
      }
      short.numOfChildren += 1;

      const { terminal, files, title, description } = req.body;

      const newPaste = new Paste({
        title,
        description,
        short: short.short,
        version: short.numOfChildren,
      });

      newFiles = files.map(file => new File({
        title: file.title,
        body: file.body,
        root: file._id && file._id.length === 24 ? mongoose.Types.ObjectId(file._id) : null,
        syntax: file.syntax,
      }));

      newPaste.files = newFiles.map(file => file._id);

      newTerminal = new Terminal({
        body: terminal.body,
        root: terminal._id && terminal._id.length === 24 ? mongoose.Types.ObjectId(terminal._id) : null,
      });

      newPaste.terminal = newTerminal._id;

      return Promise.all([newPaste.save(), short.save()]);
    })
    .then((saved) => {
      createdPaste = saved[0];
      return Promise.all(newFiles.map(file => file.save()));
    })
    .then((files) => {
      createdPaste.files = files;
      const rootFilesPromises = Promise.all(files.map(file => File.findById(file.root))); // get all the root Files
      return Promise.all([newTerminal.save(), rootFilesPromises, Terminal.findById(newTerminal.root)]);
    })
    .then((results) => {
      const terminal = results[0];
      const rootFiles = results[1];
      const rootTerminal = results[2];
      createdPaste.terminal = terminal;
      res.status(201).json({
        createdPaste,
        root: {
          files: rootFiles,
          terminal: rootTerminal,
        },
      });
    })
    .catch((err) => {
      next(err);
    });

  // Paste.findOne({
  //   short: req.params.short,
  //   version: req.body.version,
  // })
  //   .populate('files')
  //   .populate('terminal')
  //   .then((paste) => {
  //     if (paste) {
  //       root.files = paste.files;
  //       root.terminal = paste.terminal;
  //       const version = paste.numOfChildren + 1;
  //       paste.numOfChildren += 1;

  //       const newPaste = new Paste({
  //         title: req.body.title,
  //         description: req.body.description,
  //         short: req.params.short,
  //         version,
  //         root: mongoose.Types.ObjectId(paste._id),
  //       });
  //       newFiles = req.body.files.map(file => new File({
  //         title: file.title,
  //         body: file.body,
  //         rootId: file._id.length === 24 ? file._id : '',
  //         syntax: file.syntax,
  //       }));

  //       newPaste.files = newFiles.map(file => file._id);

  //       newTerminal = new Terminal({
  //         body: req.body.terminal.body,
  //       });
  //       newPaste.terminal = newTerminal._id;

  //       return Promise.all([paste.save(), newPaste.save()]);
  //     }

  //   })
  //   .then((createdPastes) => {
  //     // allows fields to be mutable
  //     createdPaste = createdPastes[1].toObject();
  //     return Promise.all(newFiles.map(file => file.save()));
  //   })
  //   .then((files) => {
  //     createdPaste.files = files;
  //     return newTerminal.save();
  //   })
  //   .then((terminal) => {
  //     createdPaste.terminal = terminal;
  //     createdPaste.root = root;
  //     res.status(201).json(createdPaste);
  //   })
  //   .catch((err) => {
  //     next(err);
  //   });
});

module.exports = router;
