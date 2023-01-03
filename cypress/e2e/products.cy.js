import locators from "../support/locators"

describe('product tests', () => {

  beforeEach(() => {
    cy.visit(Cypress.env("url"))
  })

  it('search a product', () => {
    cy.get('#search_query_top').type('dress')
    cy.get('.button-search').click()
    cy.get('.lighter').contains('dress')
  })

  it('filter a product', () => {
    cy.xpath(locators.xpButtonWomenFilter).click()
    cy.get('.category-name').contains('Women').should('be.visible')
  })

  it('click in a product', () => {
    cy.xpath(locators.xpButtonWomenFilter).click()
    cy.get('.product-container .product-name').first().click()
    cy.get('#buy_block').should('be.visible')
  })

})