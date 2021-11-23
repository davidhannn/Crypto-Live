const express = require('express')
const router = express.Router();

const { createUser } = require('../controllers/User.js')

router.post('/register', createUser);

module.exports = router;