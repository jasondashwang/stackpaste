const router = require('express').Router();
const User = require('../../db/models/user');

router.post('/', (req, res, next) => {
  // will require more auth
  const newUser = new User({
    username: req.body.username,
  });

  newUser.password = newUser.hash(req.body.password);

  newUser.save()
    .then((dbUser) => {
      res.status(201).json(dbUser);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
