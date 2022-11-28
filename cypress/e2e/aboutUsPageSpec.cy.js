/// <reference types="cypress"/>

import Footer from "../pageObjects/Footer";
import AboutUs from "../pageObjects/AboutUsPage";
import ApiPage from "../pageObjects/ApiPage";
import SubscriptionsPage from "../pageObjects/SubscriptionsPage";

const footer = new Footer();
const aboutUs = new AboutUs();
const apiPage = new ApiPage();
const subscriptionsPage = new SubscriptionsPage();

describe('About Us', () => {

    beforeEach(function () {
        cy.fixture('url').then(url  => {
            this.url = url;
        });
        cy.fixture('bugHunters').then(signIn  => {
            this.signIn = signIn;
        });
        cy.visit('/');
        cy.wait(9000)
    })

    it('AT_028.006 | About us > Verify "Products Documentation" button redirects to API page', function() {
        footer.clickAboutUsLink();
        aboutUs.clickProductsDocumentationButton();

        cy.url().should('include', this.url.API);
        apiPage.elements.getWeatherApiTitle().should('be.visible');
    });

    it('AT_028.008 | About us > Verify "Buy by Subscription" button redirects to subscriptions page ', function()  {
        footer.clickAboutUsLink();
        aboutUs.clickBuyBySubscriptionButton();
        
        cy.login(this.signIn.email, this.signIn.password)

        cy.url().should('be.equal', this.url.Subscriptions);
        subscriptionsPage.elements.getOneCallByCallSubscriptionPlan().should('be.visible')  
    });
});