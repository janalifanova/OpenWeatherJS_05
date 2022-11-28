class AboutUs {
    elements = {
        getProductsDocumentationButton: () => cy.get('div.grid-container [href="/api"]'),
        getBuyBySubscriptionButton: () => cy.get('a[href="https://home.openweathermap.org/subscriptions"]')
    }

    clickProductsDocumentationButton() {
        this.elements.getProductsDocumentationButton().click();
    }

    clickBuyBySubscriptionButton() {
        this.elements.getBuyBySubscriptionButton().click();
    }
}
export default AboutUs;