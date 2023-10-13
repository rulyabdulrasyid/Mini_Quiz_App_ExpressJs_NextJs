const { Take, sequelize } = require("../models");

class TakeController {
  static async getAll(req, res, next) {
    try {
      const data = await Take.findAll();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async create(req, res, next) {
    const userId = req.user.id;
    const { quiz_id } = req.body;

    try {
      const newTake = await sequelize.transaction(async (t) => {
        const createTake = await Take.create(
          {
            user_id: userId,
            quiz_id,
          },
          { transaction: t }
        );
        return createTake;
      });
      res.status(201).json(newTake);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = TakeController;
