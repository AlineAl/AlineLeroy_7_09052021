const jwt = require('jsonwebtoken');
const db = require("../models");
const User = db.User;
const JWT_SIGN_SECRET = '<JWT_KEY>';

module.exports = {
  parseAuthorization: function(authorization) {
    return (authorization != null) ? authorization.replace('Bearer ', ' ') : null;
  },
  getUserId: function(authorization) {
    let userId = -1;
    let token = module.exports.parseAuthorization(authorization);
    console.log(token)
    if(token != null) {
      try {
        let jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
        if(jwtToken)
          userId = jwtToken.userId;
      } catch(err) { }
    }
    return userId;
  }
}