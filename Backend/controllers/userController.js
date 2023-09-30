const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserController {
  static async getAll(req, res, next) {
    try {
      const data = await User.findAll();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
