var Page = require('./page')
var SearchFragment = Object.create(Page, {
    /**
     * define elements
     */
    searchField: { get: function () { return cy.get('#searchfor'); } },
    categoryDropDown: { get: function () { return cy.get("select[data-test='search-context']"); } },
    searchButton:     { get: function () { return cy.get("input[data-test='search-button']"); } },
    /**
     * define or overwrite page methods
     */
    searchFor: { value: function(searchString) {
        this.searchField.type(searchString);
        this.searchButton.click();
    } }
});
module.exports = SearchFragment;