describe('Rijksmuseum exercises', function () {

    beforeEach(function () {
        cy.visit('https://www.rijksmuseum.nl')

    })

    it('Find the agenda event for 2017-07-27', function() {
        cy
            .clickOn("Plan je bezoek")
            .clickOn("Nu in het museum")
            .clickOn("Dagagenda")
            .openAgendaForDate("2017-07-27")
            .get("h1[data-bind='text: periodString']")
            .should("contain","11:00 - 12:00")
    })

    it('Find out if the admission price for an adult is still 17.50 euro', function() {
        cy
            .clickOn("Praktische info")
            .clickOn("Openingstijden en prijzen")
            .get("h2").contains("Prijzen")
            .siblings().should("contain","Volwassenen: € 17,50")
    })
})
