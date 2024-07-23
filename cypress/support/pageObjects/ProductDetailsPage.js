/// <reference types= "cypress" />

const cartItemText = "#cart-items-text";

class ProductDetailsPage {

    clickButtonText(text) {
        cy.clickText(text);
    }

    verifyCartCount(count) {
        cy.get(cartItemText).invoke('text').as('metin');
        cy.get("@metin").should("eq", count)
    }

    goToCart() {
        cy.get(cartItemText).click();
        cy.clickText("Sepete Git");
    }

}
export default new ProductDetailsPage();