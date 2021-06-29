const { Sequelize } = require('sequelize');

// user security
const bcrypt = require('bcrypt');
const jwtUtils = require('../utils/jwt.utils');
const db = require("../models");
const User = db.User;

// REGEX
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/


exports.signup = async (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const post = req.body.post;
    const description = req.body.description;

console.log(req.body)
    try {
        if (email == null || firstname == null || lastname == null || password == null) {
            return res.status(400).json({ 'error': 'missing parameters' });
        }
        
        // conditions signup

        if(firstname > 13 || firstname < 3) {
            return res.status(400).json({ 'erreur': 'le prénom doit être compris entre 3 et 13 caractères'});
        }

        if(lastname > 13 || lastname < 3) {
            return res.status(400).json({ 'erreur': 'le nom doit être compris entre 3 et 13 caractères'});
        }

        if(!emailRegex.test(email)) {
            return res.status(400).json({ 'erreur': 'email non valide'});
        }

        if(!passwordRegex.test(password)) {
            return res.status(400).json({ 'erreur': 'mot de passe non valide'});
        }

        const user = await User.findOne({
            where: { email: email }
        });

        if(user) {
            throw new Error("cet utilisateur existe déjà");
        }

        if(!user) {
            const newUser = await User.create({
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: await bcrypt.hash(password, 10),
                post: post,
                description: description,
                isAdmin: false
            });
           
            if(newUser) {
                return res.status(201).json({
                    'userId': newUser.id
                })
            }
        } else {
            return res.status(409).json({ 'error': 'user already exist' });
        }

    } catch(error) {
        res.status(400).json({ error: error });
    } 
}

exports.login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
       if(email == null || password == null) {
            return res.status(400).json({ 'error': 'missing parameters'});
        }

        const user = await User.findOne({
            where: { email: email }
        });

        if(user) {
            const verifyBcrypt = await bcrypt.compare(password, user.password);
            if(verifyBcrypt) {
                return res.status(200).json({
                    'userId': user.id,
                    'token': jwtUtils.generateTokenForUser(user),
                    'isAdmin': user.isAdmin
                });
            } else {
                return res.status(500).json({ 'error': 'invalid password'});
            }
        } else {
            return res.status(500).json({ 'error': 'user not exist' });
        } 
    } catch(error) {
        res.status(400).json({ error: error });
    }
}

exports.userProfil = async (req, res) => {
    const userId = jwtUtils.getUserId(req.headers.authorization);

    try {
        const user = await User.findOne({
            attributes: ['id', 'firstname', 'lastname', 'email', 'description', 'post'],
            where: { id: userId }
        });

        if(user) {
            res.status(201).json(user);
        } else {
            res.status(404).json({ 'error': 'user not found'});
        }
    } catch(error) {
        res.status(500).json({error: error});
    }  
}