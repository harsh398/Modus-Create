var page = require('./page')

var reportPage = Object.create(page, {
    /**
     * define elements
     */
    inflowOutflow:    { get: function () { return browser.element('/html[1]/body[1]/div[1]/main[1]/section[1]/div[2]/*'); } },
    items:            { get: function () { return browser.element('/html[1]/body[1]/div[1]/main[1]/section[1]/div[2]/ul[1]'); } },
    spending:         { get: function () { return browser.element('/html[1]/body[1]/div[1]/main[1]/section[1]/div[1]/a[2]'); } },
    misc:             { get: function () { return browser.element('/html[1]/body[1]/div[1]/main[1]/section[1]/div[2]/ul[1]'); } },
    star:             { get: function () { return browser.element("/html[1]/body[1]/div[1]/main[1]/div[1]/div[1]/a[1]"); } },
    fork:             { get: function () { return browser.element("/html[1]/body[1]/div[1]/main[1]/div[1]/div[2]/a[1]"); } },
    sstar   :         { get: function () { return browser.element("//div[@class='_5BAbI']//div[2]//span[1]"); } },
    reports:          { get: function () { return browser.element("//a[@class='_2RaQ4']"); } },
    /**
     * define or overwrite page methods
     */
getInflowAmount: { value: function() {
    return this.inflowOutflow.getText();
    } },

getItems: { value: function() {
    return this.items.getText();
    } },

clickSpending: { value: function () {
    this.spending.click();
    browser.pause(2000);
    } },

getMiscAmount: { value: function() {
    return this.misc.getText();
    } },

clickReports: { value: function () {
    this.reports.click();
    browser.pause(4000);
    } },

clickStar: { value: function () {
    this.star.click();
    browser.pause(2000);
    } },

clickFork: { value: function () {
    this.fork.click();
    browser.pause(2000);
    } },

clicksStar: { value: function () {
    browser.leftClick("//div[@class='_5BAbI']",655,33);
    browser.pause(2000);
    } },
    });

module.exports = reportPage
