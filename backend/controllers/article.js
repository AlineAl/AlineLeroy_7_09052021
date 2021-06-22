const db = require('../models');
const Article = db.Article;
const User = db.User;
const jwtMiddleware = require('../middleware/auth');

const getAllArticles = async (req, res) => {
    try {
        const fields = req.body.fields;
        const limit = parseInt(req.query.limit);
        const offset = parseInt(req.query.offset);
        const order = req.query.order;

        const articles = await Article.findAll({
            order: [(order != null) ? order.split(':') : ['title', 'ASC']],
            attributes: (fields !== '*' && fields != null) ? fields.split(',') : null,
            limit: (!isNaN(limit)) ? limit : null,
            offset: (!isNaN(offset)) ? offset : null,
            include: [{
                model: User,
                attributes: [ 'firstname', 'lastname' ]
            }]
        })

        if(articles) {
            res.status(200).json(articles);
        } else {
            res.status(404).json({ "error": "no messages found"});
        }
    } catch(error) {
        return res.status(500).send(error.message);
    }
}

const getArticleById = async (req, res) => {
    try {
        const articleId = req.params.id;
        const article = await Article.findOne({
            where: { id: articleId },
            include: [{
                model: User,
                attributes: [ 'firstname', 'lastname' ]
            }]
        });

        if(article) {
            return res.status(200).json(article);
        } else {
            return res.status(404).send('Article with the specified ID does not exists');
        }     
    } catch(error) {
        return res.status(500).send(error.message);
    }
}

const createArticle = async (req, res) => {
    try {
        const userId = jwtMiddleware.getUserId(req.headers.authorization);
        const title = req.body.title;
        const content = req.body.content;
        
        if(title == null || content == null) {
            return res.status(400).json({'error': 'missing parameters'});
        }

        const user = await User.findOne({
            where: { id: userId }
        });

        if(user) {
            const newArticle = await Article.create({
                title: title,
                content: content,
                likes: 0,
                UserId: user.id
            })

            if(newArticle) {
                return res.status(201).json(newArticle);
            } else {
                return res.status(500).json({'error': 'cannot post message'})
            }
        } else {
            res.status(404).json({'error': 'user not found'});
        }

    } catch(error) {
        return res.status(500).json({ error: error.message })
    }
}

const UpdateArticle = async(req, res) => {
    try {
        const articleId = req.params.id;
        const updated = await Article.update(req.body.article, {
            where: { id: articleId }
        });
        if(updated) {
            const updatedArticle = await Article.findOne({ where: { id: articleId }});
            return res.status(200).json({ article: updatedArticle });
        }
        throw new Error('Article not found');
    } catch(error) {
        return res.status(500).send(error.message);
    }
};

const deleteArticle = async (req, res) => {
    try {
        const articleId = req.params.id;
        const deleted = await Article.destroy({
            where: { id: articleId }
        })
        if(deleted) {
            return res.status(204).send("article deleted");
        }
        throw new Error('Article not found')
    } catch(error) {
        return res.status(500).send(error.message);
    }
};

module.exports = { getAllArticles, getArticleById, UpdateArticle, deleteArticle, createArticle }