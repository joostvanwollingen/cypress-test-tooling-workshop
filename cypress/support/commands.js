//Bol.com
Cypress.addParentCommand("searchForTerm", function (searchTerm) {
    var searchTerm = searchTerm || "searchTerm"

    var log = Cypress.Log.command({
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

Cypress.addParentCommand("openFirstItemOnListPage", function () {
    cy.get("a[data-test='product-title']")
        .first().click()
})

//TypeForm
Cypress.addParentCommand("answerFormQuestion", function (input) {
    var input = input || ""

    var log = Cypress.Log.command({
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

Cypress.addParentCommand("selectFormOption", function (input) {
    var input = input || ""

    var log = Cypress.Log.command({
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
Cypress.addParentCommand("clickOn", function (input) {
    var input = input || ""

    var log = Cypress.Log.command({
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

Cypress.addParentCommand("openAgendaForDate", function (date) {
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

    var log = Cypress.Log.command({
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

