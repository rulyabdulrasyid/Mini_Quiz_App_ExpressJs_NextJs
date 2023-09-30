"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Answer.belongsTo(models.Question, { foreignKey: "question_id" });
    }
  }
  Answer.init(
    {
      question_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { notEmpty: true },
      },
      answer: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: { notEmpty: true },
      },
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { notEmpty: true },
      },
    },
    {
      sequelize,
      modelName: "Answer",
    }
  );
  return Answer;
};
