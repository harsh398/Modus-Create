var expect = require('chai').expect;
var assert = require('chai').assert;
var BudgetPage = require('../pageobjects/budget.page');
var ReportPage = require('../pageobjects/report.page');

describe('Test Suite 2', function () {

    it('Adding Income Without Value', function () {
        console.log(".....................Suite 2.  Test Case 1 execution started........................");
        console.log("TC => Navigate to Budget page");
        console.log("1. Opening Budget.");
        BudgetPage.open();
        console.log("2. Adding Income Without Value");
        BudgetPage.withoutValue();
        console.log(".....................Test Case 1 execution finished.......................");
    });
    it('Adding Income Without Description', function () {
        console.log(".....................Suite 2.  Test Case 2 execution started........................");
        console.log("TC => Navigate to Budget page");
        console.log("1. Opening Budget.");
        BudgetPage.open();
        console.log("2. Adding Income without Description ");
        BudgetPage.withoutDes();
        console.log(".....................Test Case 2 execution finished.......................");
    });
   it('Adding Income Without Description and Value', function () {
        console.log(".....................Suite 2.  Test Case 3 execution started........................");
        console.log("TC => Navigate to Budget page");
        console.log("1. Opening Budget.");
        BudgetPage.open();
        console.log("2. Adding Income without Value and Description");
        BudgetPage.word();
        console.log(".....................Test Case 3 execution finished.......................");
    });

});
