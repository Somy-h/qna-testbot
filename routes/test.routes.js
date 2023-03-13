const express = require("express");
const testController = require("../controllers/test.controller");
const router = express.Router();

router.get("/:category/:level/:number/:type?", testController.getQuestions);


module.exports = router;
