const express = require("express");
const router = express.Router();
const QuizController = require("../controllers/quizController");

router.get("/", QuizController.getAll);

module.exports = router;
