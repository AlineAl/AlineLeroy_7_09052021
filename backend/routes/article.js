const express = require('express');

const articleController = require('../controllers/article');
const auth = require('../middleware/auth.js');

exports.router = (function() {
    const Router = express.Router();

    Router.get('/', articleController.getAllArticles);
    Router.get('/:id/', articleController.getArticleById);
    Router.post('/new/', articleController.createArticle);
    Router.put('/edit/:id/', articleController.UpdateArticle);
    Router.delete('/:id/', articleController.deleteArticle);

    return Router;
})();
