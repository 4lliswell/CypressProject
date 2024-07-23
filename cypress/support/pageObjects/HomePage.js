/// <reference types= "cypress" />

const cookiesAcceptButton = "#cookiescript_accept"
const searchBox = "#search-input"
const searchResultText = ".search-heading-title"

class HomePage {

    goToUrl(url) {
        cy.on("uncaught:exception", (err, runnable) => { return false; });
        cy.visit(url);
    }

    verifyUrl(url) {
        cy.url().should("eq", url);
    }

    cookiesAccept() {
        cy.get(cookiesAcceptButton, { timeout: 3000 }).should('be.visible').then(() => {
            cy.get(cookiesAcceptButton).click();
        });

    }

    sendText(text) {
        cy.sendKeys(searchBox, text);
    }

    verifySearchResult(text) {
        cy.get(searchResultText).should("be.visible").and("contain", text);
    }

    goToNextPage(pagenumber) {
        cy.get("a[href='https://www.kitapyurdu.com/index.php?route=product/search&page=" + pagenumber + "&filter_name=roman&filter_in_stock=0']").should("be.visible").first().click();
    }

}
export default new HomePage();