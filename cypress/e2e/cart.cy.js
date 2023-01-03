import locators from "../support/locators"

describe('cart tests', () => {

    beforeEach(() => {
        cy.visit(Cypress.env("url"))
    })

    it('cart start empty', () => {
        cy.get(locators.emptyCart).should('have.text', '(empty)')
    })

    it('add a product in cart', () => {
        cy.xpath(locators.xpButtonWomenFilter).click()
        cy.addProductInCart(0)
        cy.get(locators.quantityCart).should('have.text', '1')
    })

    it('add two products in cart', () => {
        cy.xpath(locators.xpButtonWomenFilter).click()
        cy.addProductInCart(0)
        cy.addProductInCart(1)
        cy.get(locators.quantityCart).should('have.text', '2')
    })

    it('remove a product in summary page', () => {
        cy.xpath(locators.xpButtonWomenFilter).click()
        cy.addProductInCart(0)
        cy.visit(Cypress.env("url")+'?controller=order')
        cy.get('.cart_quantity_delete').click()
        cy.get(locators.emptyCart).should('have.text', '(empty)')
        cy.get('.alert-warning').should('have.text', 'Your shopping cart is empty.')
    })

})