"use strict";

const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        firstname: "admin",
        lastname: "admin",
        username: "admin",
        password: await bcrypt.hash("admin", 10),
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: "user",
        lastname: "user",
        username: "user",
        password: await bcrypt.hash("user", 10),
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
