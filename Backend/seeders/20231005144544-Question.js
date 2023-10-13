"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Questions", [
      {
        quiz_id: 1,
        content:
          "Which of the following statements about AC electricity is true?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
