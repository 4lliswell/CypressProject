/// <reference types= "cypress" />

import credentials from "../fixtures/credentials.json"
import hp from "../support/pageObjects/HomePage"
import sp from "../support/pageObjects/SearchResultPage"
import dp from "../support/pageObjects/ProductDetailsPage"
import cp from "../support/pageObjects/CartPage"


describe('Kitap Yurdu Project',{tags: "@kitapYurdu"}, () => {
  it('Kitap Yurdu Test', () => {

    hp.goToUrl(credentials.kitapYurdu_Url);

    hp.verifyUrl(credentials.kitapYurdu_Url);

    hp.cookiesAccept();

    hp.sendText("roman");

    sp.verifySearchResult("roman");

    sp.goToNextPage("2");

    sp.verifyNextPage("2");

    sp.randomBookClick();

    dp.verifyCartCount("0");

    dp.clickButtonText("Sepete Ekle");

    dp.verifyCartCount("1");

    dp.goToCart();

    cp.changeSepetQuantity("3");

    cp.clickRefreshButton();

    cp.verifyPopUpAlert();

    cp.removeCart();

    cp.verifyEmptyCart("Sepetiniz boş");
    
  })
})