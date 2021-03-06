'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.Article.belongsTo(models.User, {
        onDelete: 'CASCADE'
      }),
      models.Article.hasMany(models.Comment, {
        foreignKey: {
          allowNull: false
        }
      });
    }
  };
  Article.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    likes: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};