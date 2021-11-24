const User = require('../models/User.js');

const createUser = async (req, res) => {
  // console.log('testing')
  // console.log(req.body)
  const { username, email, password } = req.body;

  const newUser = await new User({
    username: username,
    email: email,
    password: password
  })

  newUser.save((err) => {
    if (err) {
      console.log(err)
    }
  });

  res.sendStatus(201)
  // res.sendStatus(200)
}

module.exports = {
  createUser: createUser
}