var expect = require('chai').expect;
var assert = require('chai').assert;
var BudgetPage = require('../pageobjects/budget.page');
var ReportPage = require('../pageobjects/report.page');

describe('Test Suite 1 ', function () {

    it('Budget Page Displayed And Information DisPlayed ', function () {
        console.log("..................... Suite 1.  Test Case 1 execution started........................");
        console.log("TC => Navigate to Budget page");
        console.log("1. Opening Budget.");
        BudgetPage.open();
        assert.equal(browser.getTitle(),'Budgeting App - Educational React App', "Budget Table should be Present");
        console.log(browser.getTitle(), "2. Browser Title");
        console.log("3. Checking if Budget Table is Displayed");
        assert.isTrue(BudgetPage.isBudgetTablePresent(), "Budget Table should be Present");
        console.log("4. Checking if CashFlow Container is Displayed");
        assert.isTrue(BudgetPage.isCashFlowPresent(), "Budget Table should be Present");
        console.log(".....................Test execution finished.......................");
    });

  it('Adding Income and Verifying', function () {
        console.log(".....................Suite 1.  Test Case 2 execution started........................");
        console.log("1. Opening Budget.");
        BudgetPage.open();
        console.log("2. Adding  Income ");
        BudgetPage.enterIncome();
        console.log("3. Checking Total Income");
        assert.equal(BudgetPage.getTotalIncome(), '$11,302.00', "New Income Didn't get added to Total Income");
        console.log("4. Checking Working Balance Getting Updated");
        assert.equal(BudgetPage.getWorkingBalance(), '$6,713.93', "Working Balance Didn't get updated");
        console.log("5. Navigating to Reports page");
        ReportPage.clickReports();
        console.log("6. Checking Total Inflow in Inflow vs Outflow Chart");
        assert.equal(ReportPage.getInflowAmount(), 'INFLOW\n$11,302.00\nOUTFLOW\n$4,588.07', "New Income Didn't get added to Total Inflow vs OutFLow");
        console.log(".....................Test execution finished.......................");
    });



    it('Adding  Expense and Verifying', function () {
        console.log(".....................Suite 1.  Test Case 3 execution started........................");
        console.log("1. Opening Budget.");
        BudgetPage.open();
        console.log("2. Add Expense ");
        BudgetPage.enterExpense();
        console.log("3. Checking Total Outflow");
        assert.equal(BudgetPage.getTotalOutFlow(), '$9,088.07', "New Expense Didn't get added to Total Expense");
        console.log("4. Checking Working Balance Getting Updated");
        assert.equal(BudgetPage.getWorkingBalance(), '$2,286.07', "Working Balance Didn't get updated");
        console.log("5. Navigating to Reports page");
        ReportPage.clickReports();
        console.log("6. Checking Total Outflow in Inflow vs Outflow Chart");
        assert.equal(ReportPage.getItems(), 'Entertainment $2,300.00\nCar $2,000.00\nHome $1,400.00\nTravel $1,364.73\nMisc $1,100.00\nKids $500.00\nGroceries $423.34', "Total no of Expenses are not Equal");
        console.log("7. Navigating to Spending Chart");
        ReportPage.clickSpending();
        console.log("8. Checking Misc Amount in Spending Chart");
        assert.equal(ReportPage.getMiscAmount(), 'Entertainment $2,300.00\nCar $2,000.00\nHome $1,400.00\nTravel $1,364.73\nMisc $1,100.00\nKids $500.00\nGroceries $423.34', "Total no of Expenses are not equal");
        console.log(".....................Test execution finished.......................");
    });


    
    it('Add Alphanumeric Value', function () {
        console.log(".....................Suite 1.  Test Case 4  execution started........................");
        console.log("TC => Navigate to Budget page");
        console.log("1. Opening Budget.");
        BudgetPage.open();
        //The Value of d0 is 1000
        console.log("2. Add Alphanumeric Value : d0");
        BudgetPage.enterAlphaNumeric();
        console.log("3. Checking Total Outflow");
        assert.equal(BudgetPage.getTotalIncome(), '$7,802.00', "New Alphanumeric Value Didn't get added to Total Expense");
        console.log(".....................Test execution finished.......................");
    });

   it('Switching Between Report & Budget and Clicking on star  ', function () {
        console.log(".....................Suite 1.  Test Case 5 execution started........................");
        console.log("TC => Navigate to Budget page");
        BudgetPage.open();
        console.log("1. Opening Budget.");
        ReportPage.clickReports();
        console.log("1. Switching to Report.");
        BudgetPage.clickBudget();
        console.log("2. Switching to Budget again.");
        ReportPage.clickStar();
        console.log("3. Click on Star Button");
        assert.equal(browser.getTitle(),'Budgeting App - Educational React App', "The Link should get Opened in New Tab");
        console.log(".....................Test execution finished.......................");
    });

    it('Clicking on Fork  ', function () {
        console.log(".....................Suite 1.  Test Case 6 execution started........................");
        console.log("TC => Navigate to Budget page");
        BudgetPage.open();
        BudgetPage.clickBudget();
        console.log("1. Opening Budget.");
        ReportPage.clickFork();
        console.log("2. Click on Fork Button");
        assert.equal(browser.getTitle(),'Budgeting App - Educational React App', "The Link should get Opened in New Tab");
        console.log(".....................Test execution finished.......................");
    });
});
