const mongoose = require('mongoose')

const AccountSchema = {
  Username: {
    type: String, 
    required: true, 
    unique: true
  },
  Password: {
    type: String, 
    required: true, 
    unique: false
  }, 
  Cookie: {
    type: String, 
    required: false, 
    unique: false
  }
}

const Accounts = mongoose.model('Accounts', AccountSchema)

module.exports = Accounts 