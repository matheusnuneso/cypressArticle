import locators from "../support/locators"

Cypress.Commands.add('addProductInCart', (index) => { 
    cy.get(locators.addCartButton).eq(index).click()
    cy.get('.continue').click()
})

Cypress.Commands.add('login', () => { 
    cy.get('.login').click()
    cy.get('#email').type(Cypress.env('email'))
    cy.get('#passwd').type(Cypress.env('passoword'))
    cy.get('#SubmitLogin').click()
})