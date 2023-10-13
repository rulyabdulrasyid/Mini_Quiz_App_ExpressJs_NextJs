const { Response, sequelize, Option } = require("../models");

class ResponseController {
  static async getAll(req, res, next) {
    try {
      const data = await Response.findAll();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async create(req, res, next) {
    const { take_id, option_id } = req.body;
    const optionId = option_id;

    try {
      const selectedOption = await Option.findOne({
        where: { id: optionId },
      });

      if (selectedOption) {
        const questionId = selectedOption.question_id;

        const existingResponse = await Response.findOne({
          where: { question_id: questionId, take_id: take_id },
        });

        if (existingResponse) {
          return res.status(400).json({ error: "Question sudah dijawab" });
        }

        const isCorrect = selectedOption.is_correct;

        const newResponse = await sequelize.transaction(async (t) => {
          const createResponse = await Response.create(
            {
              take_id,
              question_id: questionId,
              option_id,
              response: isCorrect,
            },
            { transaction: t }
          );
          return createResponse;
        });

        return res.status(201).json(newResponse);
      } else {
        return res.status(400).json({ error: "Selected option not found" });
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ResponseController;
