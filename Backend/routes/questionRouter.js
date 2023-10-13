const express = require("express");
const router = express.Router();
const QuestionController = require("../controllers/questionController");

router.get("/", QuestionController.getAll);
router.get("/:id", QuestionController.getOne);
router.post("/create", QuestionController.create);
router.delete("/:id", QuestionController.delete);

module.exports = router;
