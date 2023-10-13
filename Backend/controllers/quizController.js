const { Quiz } = require("../models");

class QuizController {
  static async getAll(req, res, next) {
    try {
      const data = await Quiz.findAll();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = QuizController;
