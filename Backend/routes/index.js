const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");
const quizRouter = require("./quizRouter");
const takeRouter = require("./takeRouter");
const questionRouter = require("./questionRouter");
const responseController = require("./responseRouter");

router.use("/takes", takeRouter);
router.use("/users", userRouter);
router.use("/quizzes", quizRouter);
router.use("/questions", questionRouter);
router.use("/response", responseController);

module.exports = router;
