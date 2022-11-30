/// <reference types="cypress" />


import GuidePage from "../pageObjects/GuidePage.js";
import Header from "../pageObjects/Header.js";

const guidePage = new GuidePage();
const header = new Header();

describe('Header test suit', () => {

    beforeEach(function () {
        cy.fixture('url').then(url => {
            this.url = url
        });
        cy.fixture('guidePage').then(text => {
            this.text = text
        });
        cy.fixture('mapsPage').then(mapsData => {
            this.mapsData = mapsData
        });
        cy.visit('/');
    });

    it('AT_008.006 | Main menu > Guide > Verify The text "Weather data in a fast and easy-to-use way" is displayed.', function () {
        header.clickGuideMenuLink();
        cy.url().should('be.equal', this.url.guidePage);
    
        guidePage.elements.getPageDescription().should('have.text', this.text.pageDescriptionText).and('be.visible')
    })

    it('AT_033.012 | Header > Navigation > Verify "Maps" menu link', function () {
        header.clickMapsMenuLink();
        cy.url().should('eq', this.url.mapsPageLink);
        cy.title().should('eq', this.mapsData.pageTitle);
    });
})