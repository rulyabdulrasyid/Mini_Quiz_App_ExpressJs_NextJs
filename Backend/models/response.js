"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Response extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Response.belongsTo(models.Take, { foreignKey: "take_id" });
      Response.belongsTo(models.Option, { foreignKey: "option_id" });
      Response.belongsTo(models.Question, { foreignKey: "question_id" });
    }
  }
  Response.init(
    {
      take_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { notEmpty: true },
      },
      option_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { notEmpty: true },
      },
      question_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { notEmpty: true },
      },
      response: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
    },
    {
      sequelize,
      modelName: "Response",
    }
  );
  return Response;
};
