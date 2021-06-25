const jwt = require('jsonwebtoken');
const db = require("../models");
const User = db.User;

module.exports = async (req, res, next) => {
  console.log(req.body)
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');

    const user = await User.findOne({
      where: { id: decodedToken.id }
    })

    if (!user) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};