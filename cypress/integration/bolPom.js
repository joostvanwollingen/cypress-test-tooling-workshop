//Not sure if this is a good idea, but still want to try
//https://gitter.im/cypress-io/cypress?at=586f32ecc02c1a3959f208b3


var s = require("../support/bol/searchFragment");
var l = require("../support/bol/listPage");
var p = require("../support/bol/productPage");
var b = require("../support/bol/basketPopupFragment");
var c = require("../support/bol/basketPage");
var loginPage = require("../support/bol/loginPage");


describe('bol.com exercises', function () {

    beforeEach(function () {
        cy.visit('https://www.bol.com')
    })

    it('Assert that GI Joe budget is 175.000.000', function() {

        s.searchFor("G.I. Joe: The Rise Of Cobra")
        l.openProduct(3)
        p.addToCart()
        b.continueToCheckout()
        c.continueOrder()
        loginPage.login("user@gmail.com","wachtwoord")



            // cy
            // .get("a[href='#product_specifications'].link-cta").click()
            // .get("span[data-test='showmore-text-more']").click()
            // .get("dt.specs__title:contains('Budget')+dd.specs__value:contains('$ 175.000.000')")
            // .should("be.visible")
    })

})
