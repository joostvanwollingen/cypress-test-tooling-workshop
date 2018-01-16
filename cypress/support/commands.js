//Bol.com
Cypress.Commands.add("searchForTerm", function (searchTerm) {
    var searchTerm = searchTerm || "searchTerm"

    var log = Cypress.log({
        name: "searchForTerm",
        message: [searchTerm],
        onConsole: function () {
            return {
                searchTerm: searchTerm
            }
        }
    })

    cy
        .get('#searchfor')
        .type(searchTerm + "{enter}")
        .then(function () {
            log.snapshot().end()
        })
})

Cypress.Commands.add("openFirstItemOnListPage", function () {
    cy.get("a[data-test='product-title']")
        .first().click()
})

//TypeForm
Cypress.Commands.add("answerFormQuestion", function (input) {
    var input = input || ""

    var log = Cypress.log({
        name: "answerFormQuestion",
        message: [input],
        onConsole: function () {
            return {
                input: input
            }
        }
    })

    cy
        .focused()
        .type(input + "{enter}")
        .wait(1000)
        .then(function () {
            log.snapshot().end()
        })
})

Cypress.Commands.add("selectFormOption", function (input) {
    var input = input || ""

    var log = Cypress.log({
        name: "selectFormOption",
        message: [input],
        onConsole: function () {
            return {
                input: input
            }
        }
    })

    cy
        .get("body")
        .type(input)
        .wait(1000)
        .then(function () {
            log.snapshot().end()
        })
})

//Rijksmuseum
Cypress.Commands.add("clickOn", function (input) {
    var input = input || ""

    var log = Cypress.log({
        name: "clickOn",
        message: [input],
        onConsole: function () {
            return {
                text: input
            }
        }
    })

    cy
        .get("body")
        .contains(input)
        .click()
        .then(function () {
            log.snapshot().end()
        })
})

Cypress.Commands.add("openAgendaForDate", function (date) {
    var desiredDate = new Date(date) || "";
    var desiredYear = desiredDate.getFullYear();
    var desiredMonth = desiredDate.getMonth();
    var desiredDay = desiredDate.getDate();

    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();

    var yearDifference = desiredYear - currentYear;
    var monthDifference = desiredMonth - currentMonth;

    var totalDifferenceInMonths = (yearDifference * 12) + monthDifference;

    var log = Cypress.log({
        name: "openAgendaForDate",
        message: [date],
        onConsole: function () {
            return {
                date: date,
                difference: totalDifferenceInMonths
            }
        }
    })

    cy
        .get("p[data-role='date-navigation-value']")
        .click()
        .get("a[data-handler='next']").as("nextButton")

    for (let i = 0; i < totalDifferenceInMonths; i++) {
        cy
            .get("@nextButton")
            .click()
    }

    cy
        .get("td[data-handler='selectDay'][data-month='" + (desiredMonth) + "'][data-year='" + desiredYear +"']")
        .contains(desiredDay)
        .click()
        .then(function () {
            log.snapshot().end()
        })
})

