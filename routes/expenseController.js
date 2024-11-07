const express = require("express");
const router = express.Router();

const expenseBusinessLogic = require('../business/expense_businessLogic.js');


router.get("/getAll", expenseBusinessLogic.getAllExpenses);
router.post("/saveExpense", expenseBusinessLogic.saveExpense);
router.post("/updateExpense", expenseBusinessLogic.updateExpense);
router.post("/deleteExpense", expenseBusinessLogic.deleteExpense);



module.exports = router;