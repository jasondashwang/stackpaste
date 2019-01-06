const router = require('express').Router();
const mongoose = require('mongoose');
const Paste = require('../../db/models/paste');
const File = require('../../db/models/file');
const Terminal = require('../../db/models/terminal');

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
    .populate('files')
    .populate('terminal')
    .populate({
      path: 'root',
      populate: [{
        path: 'files',
      }, {
        path: 'terminal',
      }],
    })
    .then((paste) => {
      if (paste) {
        res.json(paste);
      } else {
        const err = new Error(`Paste not found with short ${req.params.short} and version ${req.params.version}`);
        err.status = 404;
        throw err;
      }
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
  // Create a new File for each file
  const newFiles = req.body.files.map(file => new File({
    title: file.title,
    body: file.body,
    syntax: file.syntax,
  }));
  const newTerminal = new Terminal({
    body: req.body.terminal.body,
  });

  const newPaste = new Paste({
    title: req.body.title,
    description: req.body.description,
    version: 0,
  });

  // Map paste's files to each file.id
  newPaste.files = newFiles.map(file => file._id);
  newPaste.terminal = newTerminal._id;
  let createdPaste;

  newPaste.save()
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
  const root = {};
  Paste.findOne({
    short: req.params.short,
    version: 0,
  })
    .populate('files')
    .populate('terminal')
    .then((paste) => {
      if (paste) {
        root.files = paste.files;
        root.terminal = paste.terminal;
        const version = paste.numOfChildren + 1;
        paste.numOfChildren += 1;

        const newPaste = new Paste({
          title: req.body.title,
          description: req.body.description,
          short: req.params.short,
          version,
          root: mongoose.Types.ObjectId(paste._id),
        });
        newFiles = req.body.files.map(file => new File({
          title: file.title,
          body: file.body,
          rootId: file._id.length === 24 ? file._id : '',
          syntax: file.syntax,
        }));
        newPaste.files = newFiles.map(file => file._id);

        newTerminal = new Terminal({
          body: req.body.terminal.body,
        });
        newPaste.terminal = newTerminal._id;

        return Promise.all([paste.save(), newPaste.save()]);
      }
      const err = new Error(`Paste not found with short: ${req.params.short}`);
      err.status = 404;
      throw err;
    })
    .then((createdPastes) => {
      // allows fields to be mutable
      createdPaste = createdPastes[1].toObject();
      return Promise.all(newFiles.map(file => file.save()));
    })
    .then((files) => {
      createdPaste.files = files;
      return newTerminal.save();
    })
    .then((terminal) => {
      createdPaste.terminal = terminal;
      createdPaste.root = root;
      res.status(201).json(createdPaste);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
