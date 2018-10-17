const router = require('express').Router();
const Paste = require('../../db/models/paste');
const File = require('../../db/models/file');
const Terminal = require('../../db/models/terminal');

router.get('/:short', (req, res, next) => {
  Paste.findOne({
    short: req.params.short,
  })
    .then((paste) => {
      if (paste) {
        res.json(paste);
      } else {
        res.status(404).end();
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
  // const newFiles = req.body.files.map(file => new File(file));

  // const newTerminal = new Terminal(req.body.terminal);
  const newPaste = new Paste({
    title: req.body.title,
    description: req.body.description,
  });

  // Map paste's files to each file.id
  // newPaste.files = newFiles.map(file => file._id);
  let createdPaste;

  newPaste.save()
    .then((dbPaste) => {
      createdPaste = dbPaste;
//      return Promise.all(newFiles.map(file => file.save()));
//    })
//   .then((dbFiles) => {
//     createdPaste.files = dbFiles;
//      return newTerminal.save();
//    })
//   .then((dbTerminal) => {
//      createdPaste.terminal = dbTerminal;
      res.status(201).json(createdPaste);
    })
    .catch((err) => {
      next(err);
    });
});

/*
  Request has
  {
    title,
    description,
    pasteId,
  }
*/
router.put('/', (req, res, next) => {
  res.status(201).end();
});

module.exports = router;
