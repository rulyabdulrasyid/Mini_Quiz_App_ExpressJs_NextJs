const express = require("express");
const router = express.Router();
const ResponseController = require("../controllers/responseController");

router.get("/", ResponseController.getAll);
router.post("/newresponse", ResponseController.create);

module.exports = router;
