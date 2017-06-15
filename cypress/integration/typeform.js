describe('typeform.com exercises', function () {

    beforeEach(function () {
        cy.visit('https://fhoeben.typeform.com/to/fdx32Y')

    })

    it('Fill all the questions', function() {
        cy
            .contains("Start").click()
            .wait(1250)
            .answerFormQuestion("Joost")
            .answerFormQuestion("www.bol.com")
            .selectFormOption("a")
            .selectFormOption("1")
            .answerFormQuestion("joostvanwollingen@gmail.com")
            .selectFormOption("7")
            .selectFormOption("a")
            .answerFormQuestion("It's awesome")
            .wait(1000)
            .get("body")
            .type("{enter}")
            .contains("Thanks for completing this typeform").should("be.visible")
    })
})
