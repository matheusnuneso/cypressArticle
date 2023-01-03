describe('login tests', () => {

  before(() => {
    cy.visit(Cypress.env("url"))
  })

  it('loginSuccess', () => {
    cy.get('#user-name').type('aaa')
  })

})