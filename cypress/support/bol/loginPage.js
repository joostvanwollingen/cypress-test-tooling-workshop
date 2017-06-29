var Page = require('./page')
var LoginPage = Object.create(Page, {
    /**
     * define elements
     */
    emailField: { get: function () { return cy.get("#login_email"); }},
    passwordField: { get: function () { return cy.get("#login_password"); }},
    loginButton: { get: function () { return cy.get('input[name=submit][value=Inloggen]'); }},
    /**
     * define or overwrite page methods
     */
    login: { value: function(email, password) {
        this.emailField.type(email)
        this.passwordField.type(password)
        this.loginButton.click()
    } }
});
module.exports = LoginPage;