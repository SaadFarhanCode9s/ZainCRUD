var express = require("express");
var router = express.Router();
var expenseController = require("./expenseController.js");
// var loanController = require("./loanController.js");

router.use("/expenses", expenseController);
// router.use("/loans", expenseController);

module.exports = router;
