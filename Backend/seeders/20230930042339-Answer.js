"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Answers", [
      {
        question_id: 1,
        answer: "Spring Boot",
        status: true,
        score: 100,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 1,
        answer: "Expres",
        status: false,
        score: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 1,
        answer: "Node",
        status: false,
        score: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 1,
        answer: "Vue",
        status: false,
        score: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 1,
        answer: "React",
        status: false,
        score: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Answers", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
