/// <reference types="cypress" />


import GuidePage from "../pageObjects/GuidePage.js";
import Header from "../pageObjects/Header.js";

const guidePage = new GuidePage();
const header = new Header();

describe('Header test suit', () => {

    beforeEach(function () {
        cy.fixture('url').then(url => {
            this.url = url;
        });
        cy.fixture('guidePage').then(text => {
            this.text = text;
        });
        cy.fixture('mainPage').then(supportList => {
            this.supportList = supportList;
        })
        cy.visit('/');
    });

    it('AT_008.006 | Main menu > Guide > Verify The text "Weather data in a fast and easy-to-use way" is displayed.', function () {
        header.clickGuideMenuLink();
        cy.url().should('be.equal', this.url.guidePage);
    
        guidePage.elements.getPageDescription().should('have.text', this.text.pageDescriptionText).and('be.visible')
    })

    it('AT_018.009 | Header > Support > Verify Drop Down menu', function () {
        header.elements.getSupportDropDownMenuList().should('not.be.visible');
        header.clickSupportDropDownMenu();

        header.elements.getSupportDropDownMenuList().should('be.visible')
              .and('have.length', 3);
        
        header.elements.getSupportDropDownMenuList().each(($el, idx) => {
            expect($el.text()).to.be.equal(this.supportList.supportDropdownList[idx]);
        })     

    })
})