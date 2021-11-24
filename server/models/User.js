const mongoose = require('mongoose');

// const db = mongoose.connect('mongodb://localhost:27017/cryptoWatcher', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, () => {
//   console.log('Connected to mongoDB')
// })


// db.once('open', () => {
//   console.log('database connected')
// })

// db.on('error', () => {
//   console.log('database not connected')
// })

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: [6, 'password must be 6 characters long']
  }
})

const User = mongoose.model('User', userSchema);

module.exports = User