const express = require("express");
const router = express.Router();

const { getMeritList } = require("../controllers/meritListController");

router.get("/", getMeritList);

module.exports = router;
