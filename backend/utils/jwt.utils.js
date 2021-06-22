var jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = '<JWT_KEY>';
const db = require("../models");
const User = db.User;

// Exported functions
module.exports = {
  generateTokenForUser: function(user) {
    return jwt.sign({
      userId: user.id,
      isAdmin: user.isAdmin
    },
    JWT_SIGN_SECRET,
    {
      expiresIn: '1h'
    })
  }
}