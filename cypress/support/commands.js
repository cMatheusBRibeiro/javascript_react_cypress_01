Cypress.Commands.add("getByTestId", (selector) => {
  return cy.get(`[data-testid="${selector}"]`);
});

Cypress.Commands.add("verifyContent", (selector, text) => {
  return cy.getByTestId(selector).should("contain", text);
});
