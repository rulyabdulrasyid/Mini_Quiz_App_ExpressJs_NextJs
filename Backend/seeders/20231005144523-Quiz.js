"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Quizzes", [
      {
        name: "Electrical",
        description: `Electrical" in English refers to anything related to electricity or electrical systems. It encompasses various aspects, including the use of electricity, electrical appliances, wiring, electrical components, electrical circuits, electrical installations, and many other things related to the flow of electricity and electronics.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Education",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Quizzes", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
