

var page = require('./page');


var budgetPage = Object.create(page, {
    /**
     * define elements
     */
    budgetTable:      { get: function () { return browser.element('/html[1]/body[1]/div[1]/main[1]/section[1]/table[1]'); } },
    cashFlowContainer:{ get: function () { return browser.element('/html[1]/body[1]/div[1]/main[1]/section[1]/table[1]/tbody[1]'); } },
    enterValue:       { get: function () { return browser.element("//input[@placeholder='Value']"); } },
    addButton:        { get: function () { return browser.element("//button[@type='submit']"); } },
    totalInflow:      { get: function () { return browser.element('/html[1]/body[1]/div[1]/main[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]'); } },
    workingBalance:   { get: function () { return browser.element('/html[1]/body[1]/div[1]/main[1]/section[1]/div[1]/div[1]/div[5]/div[1]/div[1]'); } },
    totalOutflow:     { get: function () { return browser.element('/html[1]/body[1]/div[1]/main[1]/section[1]/div[1]/div[1]/div[3]/div[1]/div[1]'); } },
    description :     { get: function () { return browser.element("//input[@placeholder='Description']"); } },
    budgetPage:       { get: function () { return browser.element('/html[1]/body[1]/div[1]/main[1]/div[1]/a[1]'); } },
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this, 'http://localhost:8000');  
    } },

    enterIncome: { value: function () {
        browser.selectByValue("//select[@name='categoryId']", "15");
        browser.pause(1000);
        this.description.setValue("My Salary ");
        this.enterValue.setValue("2000");
        browser.pause(2000);
        this.addButton.click();
        browser.pause(2000);
        browser.selectByValue("//select[@name='categoryId']", "15");
        browser.pause(1000);
        this.description.setValue("Stocks and Shares ");
        this.enterValue.setValue("2500");
        browser.pause(2000);
        this.addButton.click();
        browser.pause(2000);
    } },

    withoutValue: { value: function () {
        browser.selectByValue("//select[@name='categoryId']", "15");
        browser.pause(1000);
        this.description.setValue("Stocks and Shares ");
        browser.pause(2000);
        this.addButton.click();
        browser.pause(2000);
    } },

    withoutDes: { value: function () {
        browser.selectByValue("//select[@name='categoryId']", "15");
        browser.pause(1000);
        this.description.setValue("Stocks and Shares ");
        this.enterValue.setValue("2000");
        browser.pause(2000);
        this.addButton.click();
        browser.pause(2000);
    } },

    withoutDv: { value: function () {
           browser.selectByValue("//select[@name='categoryId']", "15");
        browser.pause(1000);
        this.addButton.click();
        browser.pause(2000);
    } },

    word: { value: function () {
        browser.selectByValue("//select[@name='categoryId']", "15");
        browser.pause(1000);
        this.description.setValue("Stocks and Shares ");
        this.enterValue.setValue("Harsh");
        browser.pause(2000);
        this.addButton.click();
        browser.pause(2000);
    } },

    enterExpense: { value: function () {
        browser.selectByValue("//select[@name='categoryId']", "10");
        browser.pause(1000);
        this.description.setValue("Car Service ");
        this.enterValue.setValue("2000");
        browser.pause(2000);
        this.addButton.click();
        browser.pause(2000);
        browser.selectByValue("//select[@name='categoryId']", "5");
        browser.pause(1000);
        this.description.setValue("School Fee");
        this.enterValue.setValue("500");
        browser.pause(2000);
        this.addButton.click();
        browser.pause(2000);
        browser.selectByValue("//select[@name='categoryId']", "6");
        browser.pause(1000);
        this.description.setValue("Travel Expenses ");
        this.enterValue.setValue("600");
        browser.pause(2000);
        this.addButton.click();
        browser.pause(2000);
        browser.selectByValue("//select[@name='categoryId']", "13");
        browser.pause(1000);
        this.description.setValue("Home necessities  ");
        this.enterValue.setValue("1400");
        browser.pause(2000);
        this.addButton.click();
        browser.pause(2000);
    } },

    enterAlphaNumeric: { value: function () {
        this.enterValue.setValue("e00");
        browser.pause(2000);
        this.addButton.click();  
    } },


    getTotalIncome: { value: function() {
        return this.totalInflow.getText();
    } },

    getTotalOutFlow: { value: function() {
        return this.totalOutflow.getText();
    } },

    getWorkingBalance: { value: function() {
        return this.workingBalance.getText();
    } },

    isBudgetTablePresent: { value: function() {
        if (this.budgetTable.isVisible()){
            return true;
        };
        return false;
    } },
    clickBudget: { value: function() {
        this.budgetPage.click();
        browser.pause(2000);
    } },

    isCashFlowPresent: { value: function() {
        if (this.cashFlowContainer.isVisible()){
            return true;
        };
        return false;
    } },
    
});

module.exports = budgetPage
