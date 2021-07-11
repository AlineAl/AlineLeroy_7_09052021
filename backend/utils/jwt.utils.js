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
      expiresIn: '24h'
    })
  },
  getUserId: function(data) {
    if (data.length > 1) {
      let token = data.split(' ')[1];
      try {
        let decodedToken = jwt.verify(token, JWT_SIGN_SECRET)
        userId = decodedToken.userId
        return userId
      }
      catch (err) {
        return err
      }
    };
  }
}