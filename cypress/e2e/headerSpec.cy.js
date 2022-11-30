/// <reference types="cypress" />


import GuidePage from "../pageObjects/GuidePage.js";
import Header from "../pageObjects/Header.js";
import BusinessPage from "../pageObjects/BusinessPage.js";
import AboutBusinessPage from "../pageObjects/AboutBusinessPage.js";

const guidePage = new GuidePage();
const header = new Header();
const businessPage = new BusinessPage();
const aboutBusinessPage = new AboutBusinessPage();

describe('Header test suit', () => {

    beforeEach(function () {
        cy.fixture('url').then(url => {
            this.url = url
        });
        cy.fixture('guidePage').then(text => {
            this.text = text
        });
        cy.fixture('aboutBusinessPage').then(text => {
            this.text = text
        })
        cy.visit('/');
    });

    it('AT_008.006 | Main menu > Guide > Verify The text "Weather data in a fast and easy-to-use way" is displayed.', function () {
        header.clickGuideMenuLink();
        cy.url().should('be.equal', this.url.guidePage);
    
        guidePage.elements.getPageDescription().should('have.text', this.text.pageDescriptionText).and('be.visible')
      })

    it('AT_038.002 | Header > business page > About us', function () {

        header.clickBusinessMenuLink();
    
        businessPage.clickAboutUsButton();
    
        cy.url().should('be.equal', this.url.mainAbout);
        aboutBusinessPage.elements.getAboutBusinessText().should('contain', this.text.title);
    });
})