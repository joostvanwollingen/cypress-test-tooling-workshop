var Page = require('./page')
var ListPage = Object.create(Page, {
    /**
     * define elements
     */
    productList: { get: function () { return cy.get("ul[data-test=products]>li.product-item--row"); } },
    /**
     * define or overwrite page methods
     */
    openProduct: { value: function(number) {
        this.productList.find("a[data-test=product-title]").eq(number).click()
    } },
    addToCart: { value: function(number){
        this.productList.find("a[data-button-type='add_to_basket']").eq(number).click()
    }}
});
module.exports = ListPage;