"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Option extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Option.belongsTo(models.Question, { foreignKey: "question_id" });
      Option.hasMany(models.Response, { foreignKey: "option_id" });
    }
  }
  Option.init(
    {
      question_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { notEmpty: true },
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: { notEmpty: true },
      },
      is_correct: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: { notEmpty: true },
      },
      explanation: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: { notEmpty: true },
      },
    },
    {
      sequelize,
      modelName: "Option",
    }
  );
  return Option;
};
