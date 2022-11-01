/// <reference types="Cypress" />

describe('My First Test', () => {

  beforeEach(() => {
    cy.visit('https://example.cypress.io/')
  })

  it('clicking "type" navigates to a new url', () => {
    // cy.visit('https://example.cypress.io/')
    cy.contains('next').click()
    cy.url().should('include', '/commands/traversal')
    // cy.go('back')
  })

  it('clicking "root" navigates to a new url', () => {
    // cy.visit('https://example.cypress.io/')
    
    cy.contains('root').click();
    
  })

  // it('verify user can click on btn Learn more', () => {
  //   cy.visit('https://openweathermap.org/guide');
  //   cy.contains('Learn more').click()
  // })
})

  