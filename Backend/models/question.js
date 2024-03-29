"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Question.belongsTo(models.Quiz, { foreignKey: "quiz_id" });
      Question.hasMany(models.Option, { foreignKey: "question_id" });
      Question.hasMany(models.Response, { foreignKey: "question_id" });
    }
  }
  Question.init(
    {
      quiz_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { notEmpty: true },
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: { notEmpty: true },
      },
    },
    {
      sequelize,
      modelName: "Question",
    }
  );
  return Question;
};
