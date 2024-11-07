const database = require('./database');


/**************************************************
 *************** EXPENSE CRUD QUERIES *************
 **************************************************/

//get expense query
module.exports.getAllExpenses = async function () {

    const sql = `SELECT * FROM expenses`;

    const queryResult = await database.runQuery(sql);

    return queryResult;

};



//save expense query

module.exports.saveExpense = async function (data, datetime, remaining_amount) {

    const sql = `INSERT INTO expenses (item, datetime, item_price, budget_provided, remaining_amount, giver_person, taker_person) VALUES ('${data.item}', '${datetime}', '${data.item_price}', '${data.budget_provided}', '${remaining_amount}','${data.giver_person}', '${data.taker_person}')`;

    console.log(sql);

    const queryResult = await database.runQuery(sql);

    if (queryResult && queryResult.affectedRows > 0) {
        return true;
    }
};


//update expense query

module.exports.updateExpense = async function (data, datetime, remaining_amount) {

    const sql = `UPDATE expenses SET  item='${data.item}', datetime='${datetime}', item_price='${data.item_price}',  budget_provided='${data.budget_provided}',  remaining_amount='${remaining_amount}',  giver_person='${data.giver_person}',  taker_person='${data.taker_person}'  WHERE  expenses.id='${data.id}'`;

    const queryResult = await database.runQuery(sql);

    if (queryResult && queryResult.affectedRows > 0) {
        return true;
    }
};



//delete expense query

module.exports.deleteExpense = async function (id) {

    const sql = `DELETE FROM expenses WHERE expenses.id='${id}'`;

    const queryResult = await database.runQuery(sql);

    if (queryResult && queryResult.affectedRows > 0) {
        return true;
    }
};