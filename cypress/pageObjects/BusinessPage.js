class BusinessPage {
    elements = {
        getH1Title: () => cy.get('.mobile-padding h1'),
        getAboutUsButton: () => cy.get('a.btn_block[href="#main_about"]')
    };

    clickAboutUsButton() {
        this.elements.getAboutUsButton().click({ force: true });
    };
};
export default BusinessPage;
