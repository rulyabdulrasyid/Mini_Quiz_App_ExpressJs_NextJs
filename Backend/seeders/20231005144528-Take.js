"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Takes", [
      {
        quiz_id: 1,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Takes", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
