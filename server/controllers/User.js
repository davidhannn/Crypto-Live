const { User } = require('../models/User.js');

const createUser = async (req, res) => {
  // console.log('testing')
  // console.log(req.body)
  console.log(req.body);
  const { username, email, password } = req.body;

  const newUser = new User({
    username: username,
    email: email,
    password: password
  })

  console.log(newUser)
  await newUser.save((err) => {
    if (err) {
      console.log(err)
    }
  });

  res.sendStatus(200)
}

module.exports = {
  createUser: createUser
}