const express = require('express');

const router = new express.Router();

router.use('/users', require('./user'));
router.use('/pastes', require('./paste'));

module.exports = router;
