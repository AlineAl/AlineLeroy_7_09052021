const express = require('express');
const userCtrl = require('../controllers/user.js');

exports.router = (function() {
    const Router = express.Router();

    Router.route('/users/signup/').post(userCtrl.signup);
    Router.route('/users/login/').post(userCtrl.login);
    Router.route('/users/myprofile/').get(userCtrl.userProfil);

    return Router;
})();
