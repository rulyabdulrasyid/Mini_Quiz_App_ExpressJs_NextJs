const express = require("express");
const router = express.Router();
const TakeController = require("../controllers/takeController");
const auth = require("../middlewares/authorization");

router.get("/", TakeController.getAll);
router.post("/newtake", auth, TakeController.create);

module.exports = router;
