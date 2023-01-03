import locators from "../support/locators"

describe('checkout tests', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('url'))
        cy.login()
        cy.xpath(locators.xpButtonWomenFilter).click()
        cy.addProductInCart(0)
        cy.get('[title="View my shopping cart"]').click()
    })

    it('finish a buy', () => {
        cy.get(locators.buttonProceedCheckout).click()
        cy.get(locators.buttonProceedCheckout).click()
        cy.get('#cgv').click()
        cy.get(locators.buttonProceedCheckout).click()
        cy.get('.cheque').click()
        cy.get(locators.buttonProceedCheckout).click()
        cy.get('.alert').should('have.text', 'Your order on My Store is complete.')
    })

})