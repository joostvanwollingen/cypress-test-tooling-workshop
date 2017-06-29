var Page = require('./page')
var ProductPage = Object.create(Page, {
    /**
     * define elements
     */
    title: { get: function () { return cy.get("h1[data-test=title]"); } },
    buyBlock: { get: function () { return cy.get("div[data-test=feature-slot]"); } },
    /**
     * define or overwrite page methods
     */
    addToCart: { value: function() {
        this.buyBlock.find("a[data-test=add-to-basket]").click()
    } }
});
module.exports = ProductPage;