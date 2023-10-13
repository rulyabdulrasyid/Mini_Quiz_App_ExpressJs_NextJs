"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Take extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Take.belongsTo(models.User, { foreignKey: "user_id" });
      Take.belongsTo(models.Quiz, { foreignKey: "quiz_id" });
      Take.hasMany(models.Response, {
        foreignKey: "take_id",
      });
    }
  }
  Take.init(
    {
      quiz_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { notEmpty: true },
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { notEmpty: true },
      },
    },
    {
      sequelize,
      modelName: "Take",
    }
  );
  return Take;
};
