"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Options", [
      {
        question_id: 1,
        content: `AC stands for "Alternative Current.`,
        is_correct: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 1,
        content: ` AC flows in one direction only.`,
        is_correct: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 1,
        content: `AC is primarily used in batteries.`,
        is_correct: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 1,
        content: `AC voltage remains constant over time`,
        is_correct: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 1,
        content: `AC voltage remains constant over time`,
        is_correct: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Options", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
