# Cypress.io

## Installing

Simply [follow the instructions on the Cypress.io website.](https://docs.cypress.io/docs/installing-and-running)

Please note: Windows is currently not supported by Cypress.io, so use a VM in that case.


## 1. Creating your first project

* Open Cypress either by clicking the icon or by running `cypress open` on the command line
* Sign-in to your [GitHub](https://github.com/join) account
* Click `"Add Project"` in the top left
* Create a new folder: `/home/vagrant/Documents/Cypress`
* Open the project in IntelliJ \(choose `File>Open` \) or your favorite editor
* Open the [Cypress.io documentation](https://docs.cypress.io/) in a tab in your browser. We will use this to lookup commands.

> Optionally: Click `example_spec.js`  in the Cypress GUI to see the example tests run and get a feel for Cypress.

### 1.1 Project structure

By default Cypress creates some folders and files that you will probably need. During this workshop we will only use `integration/*.js` and `support/commands.js` files. If you want to know what the other files do, checkout the [Cypress.io documentation.](https://docs.cypress.io/docs/writing-your-first-test)

```
│   ├── fixtures
│   │   └── example.json
│   ├── integration
│   │   ├── example_spec.js
│   ├── support
│   │   ├── commands.js
│   │   ├── defaults.js
│   │   └── index.js
└── cypress.json
```

## 2. The Rijksmuseum website

## 2.1 Creating our first test

* Create a file: `integration/rijksmuseum.js`

* Copy/paste the code below. It will be our template for the exercises.

```
describe('Rijksmuseum exercises', function () {

    //Statements in this function will be executed before each test in this file
    beforeEach(function () {                      
        cy.visit('https://www.rijksmuseum.nl')
    })

    it('Find the agenda event for 2017-07-27', function() {
        //Implement first test here
    })

    it('Find out if the admission price for an adult is still 17.50 euro', function() {
       //Second test goes here
    })
})
```

* Run the tests with the Cypress GUI by clicking `rijksmuseum.js`. You will notice that the site opens and it executes two tests, but nothing happens yet. Let's change that!
* In order to get to the agenda page on [https://www.rijksmuseum.nl](https://docs.cypress.io/docs/writing-your-first-test) we have to click a few links. `"Plan je bezoek" > "Nu in het museum" > "Dagagenda"`. To click on an item we first need to locate it, [Cypress uses CSS-locators](https://docs.cypress.io/docs/finding-elements) to find elements in the page DOM \(HTML\). The most important one is the [`get command`](https://docs.cypress.io/v1.0/docs/get).

  Copy/paste the code below to see how you could click the "Plan je bezoek"-link.

```
cy                                            //The cy  object is how we can interact with the browser through Cypress.
    .get("span:contains('Plan je bezoek')")   //This locates the span element that contain the text we want to click on
    .click()                                  //We click it
```

* Expand the script with the locators and clicks for the [Anchor-elements](https://www.w3.org/MarkUp/1995-archive/Elements/A.html) : `"Nu in het museum" & "Dagagenda"`
* Now that we are on the [Dagagenda-page](https://www.rijksmuseum.nl/nl/agenda/) we have to:
  1. Open the calendar
  2. Click next to go to July
  3. Click the 27th
* Write the statements for these steps
* Finally we want to verify that the start and end time for the `Rondleiding Hoogtepunten van het Rijksmuseum`  event matches 11:00 - 12:00. First we need a locator for the HTML element that contains this piece of information and finally we can use Cypress' [should method](https://docs.cypress.io/v1.0/docs/should) to verify its contents. To check the contents of an element you can use the "contain" keyword.

```
.get("<your locator>")
.should("contain","<text you want to check for")
```

* Implement the check and run your test. Does it pass?
* Congrats, you've just finished your first test using Cypress.io!

## 2.2 Second exercise: Admission price

Before we go to the museum, let's check the admission price for adults. This information is displayed on the ["Openingstijden & prijzen page"](https://www.rijksmuseum.nl/nl/praktische-informatie/openingstijden-en-prijzen). You can navigate there by clicking `Plan je bezoek" > "Praktische info" > "Openingstijden en prijzen.`

Writing locators every time we just want to click visible text gets a bit tiring. Let's see if we can create a function that makes that a bit easier.

* Open the `support/commands.js` file. This file contains [custom commands](https://docs.cypress.io/v1.0/docs/commands) that we can re-use throughout our tests.
* Add the following code:

```
Cypress.addParentCommand("clickOn", function (input) {
    var input = input || ""

    var log = Cypress.log({                       //Log to the console
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
```

* Now use this command in your test to navigate to the Openingstijden page.
* Part of the HTML looks like this:

```
<h2>Prijzen</h2>
<ul>
<li>Volwassenen: € 17,50</li>
<li>Jongeren t/m 18 jaar, Museumkaart, <a href="/nl/steun-het-rijks/word-vriend">Vrienden van het Rijksmuseum</a>, ICOM, Vereniging Rembrandt, KOG, VVAK, BankGiro Loterij VIP-KAART: gratis</li>
<li>CJP, Stadspas, EYCA: 50% van de reguliere ticketprijs</li>
</ul>
```

* We want to verify that the first LI element in the list has the price and that it is just next to the H2 element with the value Prijzen. Which locators can you use for that? Cypress offers some functions for [DOM traversal](https://docs.cypress.io/v1.0/docs) \(scroll to DOM traversal header\), experiment with a few until you are happy with your solution.

# 3. Additional exercises

Want more? Have a look at the additional exercises.

* Answer all questions on [https://fhoeben.typeform.com/to/fdx32Y](https://fhoeben.typeform.com/to/fdx32Y) until you get to the ‘Thanks for completing this typeform’-page
* On the [bol.com](https://www.bol.com)site:
  * Search for "G.I. Joe: The Rise Of Cobra" and find the budget of the movie in the product specifications
  * Use the category menu to navigate to "Juwelen & Accessoires / Modeaccessoires / Zonnebrillen"-page
  * Find the differences on the [kitchen appliances page](https://www.bol.com/nl/m/elektronica/keukenapparaten/index.html) when you switch the country from Netherlands to Belgium





