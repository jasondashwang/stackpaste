const router = require('express').Router();
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
  const newFiles = req.body.files.map(file => new File(file));
  console.log(req.body.terminal);
  const newTerminal = new Terminal(req.body.terminal);
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
  Paste.findOne({
    short: req.params.short,
    version: 0,
  })
    .then((paste) => {
      if (paste) {
        const version = paste.numOfChildren + 1;
        paste.numOfChildren += 1;
        const newPaste = new Paste({
          title: req.body.title,
          description: req.body.description,
          short: req.params.short,
          version,
          root: paste._id,
        });
        newFiles = req.body.files.map(file => new File({
          title: file.title,
          body: file.body,
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
      createdPaste = createdPastes[1];
      return Promise.all(newFiles.map(file => file.save()));
    })
    .then((files) => {
      createdPaste.files = files;
      return newTerminal.save();
    })
    .then((terminal) => {
      createdPaste.terminal = terminal;
      res.status(201).json(createdPaste);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
