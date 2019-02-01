const router = require('express').Router();
const mongoose = require('mongoose');
const Paste = require('../../../db/models/paste');
const File = require('../../../db/models/file');
const Notes = require('../../../db/models/notes');
const Short = require('../../../db/models/short');
const validatePayload = require('./validate');

/*
Route only accepts :short as a request parameter
*/
router.get('/:short', (req, res, next) => {
  // Find a Paste with the short parameter that is always version 0
  Paste.findOne({
    short: req.params.short,
    version: 0,
  })
    .populate('files')
    .populate('notes')
    .then((paste) => {
      if (paste) {
        res.json({
          paste,
        });
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

/*
Route only accepts :short, and :version as request parameters
*/
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
      path: 'notes',
    })
    .then((paste) => {
      if (!paste) {
        const err = new Error(`Paste not found with short ${req.params.short} and version ${req.params.version}`);
        err.status = 404;
        throw err;
      }

      const files = paste.files.map(file => file.root);
      // Reassign the root of each files from being the object to just its _id
      paste.files.forEach((file) => {
        file.root = !file.root ? null : file.root._id;
      });

      // Put root objects into its own payload object
      res.json({
        paste,
        root: {
          files,
        },
      });
    })
    .catch((err) => {
      next(err);
    });
});

/*
  Request has
  {
    notes
    files: array of File,
    title,
    description
  }
*/
router.post('/', validatePayload, (req, res, next) => {
  let createdPaste;
  let newFiles;
  let newNotes;
  let newPaste;
  Short.create({})
    .then(({ short }) => {
      // Create a new File for each file
      newFiles = req.body.files.map(file => new File({
        title: file.title,
        body: file.body,
        syntax: file.syntax,
      }));

      newNotes = new Notes({
        body: req.body.notes.body,
      });

      newPaste = new Paste({
        short,
        title: req.body.title,
        description: req.body.description,
        version: 0,
      });

      // Map paste's files to each file.id
      newPaste.files = newFiles.map(file => file._id);
      newPaste.notes = newNotes._id;

      return newPaste.save();
    })
    .then((dbPaste) => {
      createdPaste = dbPaste;
      return Promise.all(newFiles.map(file => file.save()));
    })
    .then((dbFiles) => {
      createdPaste.files = dbFiles;
      return newNotes.save();
    })
    .then((dbNotes) => {
      createdPaste.notes = dbNotes;
      res.status(201).json(createdPaste);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/:short', validatePayload, (req, res, next) => {
  let newFiles;
  let createdPaste;
  let newNotes;

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

      const { notes, files, title, description } = req.body;

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

      newNotes = new Notes({
        body: notes.body,
      });

      newPaste.notes = newNotes._id;

      return Promise.all([newPaste.save(), short.save()]);
    })
    .then((saved) => {
      createdPaste = saved[0];
      return Promise.all(newFiles.map(file => file.save()));
    })
    .then((files) => {
      createdPaste.files = files;
      const rootFilesPromises = Promise.all(files.map(file => File.findById(file.root))); // get all the root Files
      return Promise.all([newNotes.save(), rootFilesPromises]);
    })
    .then((results) => {
      const notes = results[0];
      const rootFiles = results[1];
      createdPaste.notes = notes;
      res.status(201).json({
        createdPaste,
        root: {
          files: rootFiles,
        },
      });
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
