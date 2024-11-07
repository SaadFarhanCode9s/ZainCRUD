const queries = require('../database/expense_queries');

const missingParameters = "Missing Parameters";


/****************************************************************
 ****************** EXPENSE APP API Methods *********************
 *****************************************************************/


//GET ALL EXPENSES
module.exports.getAllExpenses = async function (req, res) {
  try {

    const getAllExpenses = await queries.getAllExpenses();
    if (getAllExpenses) {
      return res.json({
        success: true,
        data: getAllExpenses,
      });
    }

    //Default return false.
    return res.json({
      success: false,
    });
  } catch (err) {
    // Handle Error Here
    return res.json({
      success: false,
      data: err,
    });
  }
};


//SAVE EXPENSE
module.exports.saveExpense = async function (req, res) {
  //Verifying if all the required fields exist
  if (!req
    || !req.body
    || !req.body.item
    || !req.body.item_price
    || !req.body.budget_provided
    || !req.body.giver_person
    || !req.body.taker_person) {
    return res.json({
      success: false,
      data: missingParameters,
    });
  }

  try {
    let datetime = new Date();
    let remaining_amount = parseInt(req.body.budget_provided) - parseInt(req.body.item_price);

    // data, datetime, remaining_amount
    const saveExpense = await queries.saveExpense(req.body, datetime, remaining_amount);
    if (saveExpense) {
      return res.json({
        success: true,
        data: saveExpense,
      });
    }

    //Default return false.
    return res.json({
      success: false,
    });

  } catch (err) {
    // Handle Error Here
    console.log(err);
    return res.json({
      success: false,
      data: err,
    });
  }

}

//UPDATE EXPENSE
module.exports.updateExpense = async function (req, res) {
  //Verifying if all the required fields exist
  if (!req
    || !req.body
    || !req.body.id
    || !req.body.item
    || !req.body.item_price
    || !req.body.budget_provided
    || !req.body.giver_person
    || !req.body.taker_person) {
    return res.json({
      success: false,
      data: missingParameters,
    });
  }

  try {
    let datetime = new Date();
    let remaining_amount = parseInt(req.body.budget_provided) - parseInt(req.body.item_price);

    // data, datetime, remaining_amount
    const updateExpense = await queries.updateExpense(req.body, datetime, remaining_amount);
    if (updateExpense) {
      return res.json({
        success: true,
        data: updateExpense,
      });
    }

    //Default return false.
    return res.json({
      success: false,
    });

  } catch (err) {
    // Handle Error Here
    console.log(err);
    return res.json({
      success: false,
      data: err,
    });
  }

}



//DELETE EXPENSE
module.exports.deleteExpense = async function (req, res) {
  //Verifying if all the required fields exist
  if (!req
    || !req.body
    || !req.body.id) {
    return res.json({
      success: false,
      data: missingParameters,
    });
  }

  try {
    const deleteExpense = await queries.deleteExpense(req.body.id);
    if (deleteExpense) {
      return res.json({
        success: true,
        data: deleteExpense,
      });
    }

    //Default return false.
    return res.json({
      success: false,
    });

  } catch (err) {
    // Handle Error Here
    console.log(err);
    return res.json({
      success: false,
      data: err,
    });
  }

}