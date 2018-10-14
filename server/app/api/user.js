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

  /*
    Request format
    {
      currentPassword,
      userId,
      updatedPassword
    }
  */
  router.put('/password', (req, res, next) => {
    User.findById(req.body.userId)
    .then((dbUser) => {
      // Check if request's current password is valid
      if (dbUser.validPassword(req.body.currentPassword)) {
        dbUser.password = dbUser.hash(req.body.updatedPassword);
        return dbUser.save();
      } else {
        const err = new Error('Invalid Password');
        err.status = 401;
        throw err;
      }
    })
    .then((updatedDbUser) => {
      res.status(201).json(updatedDbUser);
    })
    .catch((err) => {
      next(err);
    });
  })

module.exports = router;
