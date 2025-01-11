const moment = require("moment");

describe("Formulário de cadastro", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("URL"));
  });

  it("Deve realizar o cadastro com sucesso", () => {
    const datetime = moment().format("YYYY_MM_DD_HH_mm_ss");
    cy.getByTestId("botao-cadastro").click();
    cy.getByTestId("nome-input").type("Bot Cypress");
    cy.getByTestId("email-input").type(`bot.cypress.${datetime}@gmail.com`);
    cy.getByTestId("senha-input").type("123456");
    cy.getByTestId("checkbox-input").click();
    cy.getByTestId("botao-enviar").click();

    cy.getByTestId("mensagem-sucesso")
      .should("exist")
      .and("have.text", "Usuário cadastrado com sucesso!");
  });
});
