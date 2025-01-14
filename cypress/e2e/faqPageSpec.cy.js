/// <reference types="cypress"/>

import FAQPage from "../pageObjects/FAQPage.js";
import Header from "../pageObjects/Header.js";


const header = new Header();
const faqPage = new FAQPage();

describe('faqPageSpec', () => {

    beforeEach(function () {
        cy.fixture('faqPage').then(data => {
            this.data = data;
        });
        cy.visit('/');
    });

    it('AT_016.002 | FAQ page > Verify the question "How to get an API key" is opened and visible', function () {
        header.clickSupportDropDownMenu();
        header.clickFAQMenuLink();

        faqPage.clickHowToGetAnApiKeyQuestion();
        faqPage.elements.getHowToGetAnApiKeyQuestionAfterClicking().should('be.visible');
        faqPage.elements.getHowToGetAnApiKeyQuestionContent()
            .contains(this.data.HowToGetAnApiKeyQuestionContent)
            .should('be.visible');
    });
});