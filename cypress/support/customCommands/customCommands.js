
Cypress.Commands.add('sendKeys', (webElement, text) => {
    cy.get(webElement, { timeout: 3000 }).click({ force: true }).type(text).type("{enter}");
});

Cypress.Commands.add('randomClick', (webElement) => {

    cy.get(webElement).then($products => {
        const productCount = $products.length; // Ürün sayısını alın
        const randomIndex = Math.floor(Math.random() * productCount); // Rastgele bir ürün seçmek için indeks alın
        cy.wrap($products[randomIndex]).click(); // Seçilen rastgele ürüne tıklayın
    });
});

Cypress.Commands.add('clickText', (text) => {
    cy.contains(text).click({ force: true });
});