describe('bol.com exercises', function () {

    beforeEach(function () {
        cy.visit('https://www.bol.com')
    })

    it('Assert that GI Joe budget is 175.000.000', function() {
        cy
            .searchForTerm('G.I. Joe: The Rise Of Cobra')
            .openFirstItemOnListPage()
            .get("a[href='#product_specifications'].link-cta").click()
            .get("span[data-test='showmore-text-more']").click()
            .get("dt.specs__title:contains('Budget')+dd.specs__value:contains('$ 175.000.000')")
            .should("be.visible")
    })

    it('Navigate to sunglasses page', function() {
        cy
            .get("a[data-px-common-category_menu-click-name='Modeaccessoires Zonnebrillen']:contains('Zonnebrillen'):first")
            .click({force:true})
            .contains('Zonnebrillen & accessoires')

    })

    it('Belgium has microgolf ovens', function(){
        cy
            .visit('https://www.bol.com/nl/m/elektronica/keukenapparaten/index.html')
            .contains('Magnetrons & Ovens')
            .get('a.current_country[data-test=nl]').click({force:true})
            .get("[data-value='be']").click({force:true})
            .wait(150)
            .get(".magnetronovens")
            .siblings()
            .children()
            .contains('Microgolfovens & Ovens')
    })

})
