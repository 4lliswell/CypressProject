/// <reference types= "cypress" />

const searchResultText = ".search-heading-title";
const booksList = "div[class='name']";

class SearchResultPage {

    verifySearchResult(text) {
        cy.get(searchResultText).should("be.visible").and("contain", text);
    }

    goToNextPage(pageNumber) {
        cy.get("a[href='https://www.kitapyurdu.com/index.php?route=product/search&page=" + pageNumber + "&filter_name=roman&filter_in_stock=0']").should("be.visible").first().click();
    }

    verifyNextPage(pageNumber) {
        cy.url().should("contain", "page=" + pageNumber)
    }

    randomBookClick(){
        cy.randomClick(booksList);
    }

    clickButtonText(text){
        cy.clickText(text);
    }

}
export default new SearchResultPage();