/// <reference types="cypress" />

const searchCity = '.search input'
const btnSubmit = 'button[type = "submit"]'

describe('group jsTeachers', () => {

  beforeEach(function () {
    cy.visit('/');
  })

  it('AT_010.001 | Marketplace > Verify all links have the same color on the page', () => {
    cy.get('div#desktop-menu a[href*="marketplace"]').invoke('removeAttr', 'target').click({force: true})

    cy.get('div.market-place a[href]:not(.button-round)').each(($el, index) => {
      cy.wrap($el).should('have.css', 'color', 'rgb(235, 110, 75)')
    })
  })

  it('1.NS.Verify "Search City" placeholder text', () => {
    cy.get(searchCity)
      .should('have.attr', 'placeholder', 'Search city')
      .should('be.visible')
  })

  it('2.NS.Verify "Search City" letters input', () => {
    cy.get(searchCity).type('Paris', {force: true})
      .should('be.visible')
  })

  it('3.NS.Verify "Search City" valid input shows dropdown', () => {
    const cityName = 'Paris'

    cy.get(searchCity).type(cityName, {force: true})
    cy.get(btnSubmit).click({force: true})
    cy.get('.search-dropdown-menu')
      .should('be.visible')
      .should('contain.text', cityName)
  })

  it('4.NS.Verify "Search City" dropdown relevant list items', () => {
    const cityName = 'Boston'

    cy.get(searchCity).type(cityName,{force: true})
    cy.get(btnSubmit).click({force: true})
    cy.get('.search-dropdown-menu').should('be.visible').should('contain.text', cityName)
    cy.get('.search-dropdown-menu').each(($el, index) => {
      cy.wrap($el)
        .should('contain.text', cityName)
    })
  })

  it('5.NS.Verify "Search City"  input reflects on other page elements', () => {
    const cityName = 'Houston'
    const leftPanelCityInfo = 'div .current-container '

    cy.get(searchCity).type(cityName, {force: true})
    cy.get(btnSubmit).click({force: true})
    cy.get('.search-dropdown-menu').should('contain.text', cityName).click()
    cy.get(leftPanelCityInfo).contains(cityName)
      .should('be.visible')
  })

  it('1.TV.002.000| Header > Clicking the logo', () => {
    cy.visit('/guide')
    cy.get('li[class="logo"]').click()
    cy.url().should('eq', 'https://openweathermap.org/')
  })
})
