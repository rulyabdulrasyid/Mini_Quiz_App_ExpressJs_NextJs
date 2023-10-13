"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Responses", [
      {
        take_id: 1,
        question_id: 1,
        option_id: 1,
        response: "Okeee",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Responses", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
