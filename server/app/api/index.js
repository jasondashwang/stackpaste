const express = require('express');

const router = new express.Router();

router.use('/users', require('./user'));

module.exports = router;
