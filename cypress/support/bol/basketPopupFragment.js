var Page = require('./page')
var BasketPopupFragment = Object.create(Page, {
    /**
     * define elements
     */
    continueShoppingButton: { get: function () { return cy.get("a:contains('Verder winkelen')"); } },
    orderButton:     { get: function () { return cy.get("a:contains('bestellen')"); } },
    /**
     * define or overwrite page methods
     */
    close: { value: function() {
        this.continueShoppingButton.click()
    } },
    continueToCheckout: { value: function () {
        this.orderButton.click()
    }}
});
module.exports = BasketPopupFragment;