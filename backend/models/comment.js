'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Comment.belongsTo(models.User, {
        onDelete: 'CASCADE'
      });

      models.Comment.belongsTo(models.Article, {
        onDelete: 'CASCADE'
      });      
    }
  };
  Comment.init({
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    articleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};