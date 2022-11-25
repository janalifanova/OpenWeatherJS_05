class UserHomePage {
    elements = {
        getNavBarBlocks: () => cy.get('.text-block .text-color '),
        getNewProductsLink : () => cy.get('#myTab a[href="/"]').should('have.text', 'New Products'),
    }  

    clickBillingPlanLink() {
        this.elements.getBillingPlanLink().click();
    }

    clickNewProductsLink () {
        this.elements.getNewProductsLink().click();
    }

}
export default UserHomePage;