Cypress.Commands.add("getByTestId", (selector) => {
  return cy.get(`[data-testid="${selector}"]`);
});

Cypress.Commands.add("verifyContent", (selector, text) => {
  return cy.getByTestId(selector).should("contain", text);
});

Cypress.Commands.add("loginWithCorrectCredentials", () => {
  cy.getByTestId("botao-login").click();
  cy.getByTestId("email-input").type("admin@gmail.com");
  cy.getByTestId("senha-input").type("123456");
  cy.getByTestId("botao-enviar").click();
});

Cypress.Commands.add("logout", () => {
  cy.getByTestId("botao-sair").click();
});
