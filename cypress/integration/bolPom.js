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

    it('Try to navigate a bit with Page Object Model like code', function() {

        s.searchFor("G.I. Joe: The Rise Of Cobra")
        l.openProduct(3)
        p.addToCart()
        b.continueToCheckout()
        c.continueOrder()
        loginPage.login("user@gmail.com","wachtwoord")

    })

})
