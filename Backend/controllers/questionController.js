const { Question, Option } = require("../models");

class QuestionController {
  static async getAll(req, res, next) {
    try {
      const data = await Question.findAll({
        include: [
          {
            model: Option,
            attributes: ["content"],
          },
        ],
        attributes: ["id", "quiz_id", "content"],
      });
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async getOne(req, res, next) {
    const { id } = req.params;
    try {
      const data = await Question.findOne({
        where: { id },
        include: [
          {
            model: Option,
            attributes: ["content"],
          },
        ],
        attributes: ["content"],
      });
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(400).json({ error: "ErrorNotFound" });
      }
    } catch (err) {
      next(err);
    }
  }

  static async create(req, res, next) {
    const { quiz_id, content, options } = req.body;
    try {
      const newQuestion = await Question.create({ content, quiz_id });

      if (Array.isArray(options) && options.length >= 2) {
        const createdOptions = await Option.bulkCreate(
          options.map((option) => ({
            content: option.content,
            is_correct: option.is_correct,
            explanation: option.explanation,
            question_id: newQuestion.id,
          }))
        );
        newQuestion.setDataValue("Options", createdOptions);
      }
      res.status(201).json(newQuestion);
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    const { id } = req.params;

    try {
      const question = await Question.findOne({
        where: { id },
        include: Option,
      });
      if (question) {
        await question.destroy();
        res.status(200).json({ message: "Question has been deleted" });
      } else {
        res.status(404).json({ error: "Question not found" });
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = QuestionController;
