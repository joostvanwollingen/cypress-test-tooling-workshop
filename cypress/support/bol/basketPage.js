var Page = require('./page')
var BasketPage = Object.create(Page, {
    /**
     * define elements
     */
    totalPrice: { get: function () { return cy.get(".pricewrap"); } },
    orderButton: { get: function () { return cy.get("#continue_ordering_bottom")}},
    /**
     * define or overwrite page methods
     */
    continueOrder: { value: function() {
        this.orderButton.click()
    } }
});
module.exports = BasketPage;