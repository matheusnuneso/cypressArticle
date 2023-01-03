describe('product tests', () => {

  beforeEach(() => {
    cy.visit(Cypress.env("url"))
  })

  it('search product', () => {
    cy.get('#search_query_top').type('dress')
    cy.get('.button-search').click()
    cy.get('.lighter').contains('dress')
  })

  it.only('filter product', () => {
    cy.xpath('//a[@title="Women"]').click()
  })

})