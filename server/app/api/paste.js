const router = require('express').Router();
const Paste = require('../../db/models/paste');
const File = require('../../db/models/file');
const Terminal = require('../../db/models/terminal');

router.post('/', (req, res, next) => {
  // Create a new File for each file
  const newFiles = req.body.files.map(file => new File(file));

  const newTerminal = new Terminal(req.body.terminal);

  const newPaste = new Paste({
    title: req.body.title,
    description: req.body.description,
  });

  // Map paste's files to each file.id
  newPaste.files = newFiles.map(file => file._id);
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

module.exports = router;
