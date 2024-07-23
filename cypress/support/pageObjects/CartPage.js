/// <reference types= "cypress" />

const cartQuantity = "input[name='quantity']";
const refreshButton = "i[class='fa fa-refresh green-icon']";
const refreshPopup = "#swal2-title"
const clearButton = ".alt > .fa";
const cartItemText = "#cart-items-empty";

class ProductDetailsPage {

    changeSepetQuantity(number) {
        
        cy.get(cartQuantity).invoke('attr', 'value').as('inputValue');

        cy.get('@inputValue').then((value) => {

            let newValue = parseInt(value,10)+parseInt(number,10);
            cy.get(cartQuantity).clear();
            cy.sendKeys(cartQuantity, newValue);
        });
    }

    clickRefreshButton(){
        cy.get(refreshButton).click();
    }

    verifyPopUpAlert(){
        cy.get(refreshPopup, { timeout: 3000 }).should('be.visible');
    }

    removeCart(){
        cy.get(clearButton).click();
    }

    verifyEmptyCart(string){
            cy.get(cartItemText).invoke('text').as('metin');
            cy.get("@metin").should("eq", string)
    }

}
export default new ProductDetailsPage();