import locators from "../support/locators"

Cypress.Commands.add('addProductInCart', (index) => { 
    cy.get(locators.addCartButton).eq(index).click()
    cy.get('.continue').click()
 })
