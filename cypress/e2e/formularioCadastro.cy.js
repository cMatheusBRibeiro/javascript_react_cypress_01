const moment = require("moment");

const datetime = moment().format("YYYY_MM_DD_HH_mm_ss");
const mockNome = `Bot Cypress ${datetime}`;
const mockEmail = `bot.cypress.${datetime}@gmail.com`;
const mockSenha = "123456";

describe("Formulário de cadastro", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.getByTestId("botao-cadastro").click();
  });

  describe("Campo nome em branco", () => {
    beforeEach(() => {
      cy.getByTestId("email-input").type(mockEmail);
      cy.getByTestId("senha-input").type(mockSenha);
      cy.getByTestId("checkbox-input").click();
      cy.getByTestId("botao-enviar").click();
    });

    it("Deve apresentar uma mensagem", () => {
      cy.getByTestId("nome-input-mensagem-erro").should("exist");
    });

    it("Deve apresentar uma mensagem correta", () => {
      cy.getByTestId("nome-input-mensagem-erro").should(
        "have.text",
        "O campo de nome é obrigatório"
      );
    });
  });

  describe("Campo senha em branco", () => {
    beforeEach(() => {
      cy.getByTestId("nome-input").type(mockNome);
      cy.getByTestId("email-input").type(mockEmail);
      cy.getByTestId("checkbox-input").click();
      cy.getByTestId("botao-enviar").click();
    });

    it("Deve apresentar uma mensagem", () => {
      cy.getByTestId("senha-input-mensagem-erro").should("exist");
    });

    it("Deve apresentar uma mensagem correta", () => {
      cy.getByTestId("senha-input-mensagem-erro").should(
        "have.text",
        "O campo de senha é obrigatório"
      );
    });
  });

  describe("Campo email em branco", () => {
    beforeEach(() => {
      cy.getByTestId("nome-input").type(mockNome);
      cy.getByTestId("senha-input").type(mockSenha);
      cy.getByTestId("checkbox-input").click();
      cy.getByTestId("botao-enviar").click();
    });

    it("Deve apresentar uma mensagem", () => {
      cy.getByTestId("email-input-mensagem-erro").should("exist");
    });

    it("Deve apresentar uma mensagem correta", () => {
      cy.getByTestId("email-input-mensagem-erro").should(
        "have.text",
        "O campo email é obrigatório"
      );
    });
  });

  describe("Campo email inválido", () => {
    beforeEach(() => {
      cy.getByTestId("nome-input").type(mockNome);
      cy.getByTestId("senha-input").type(mockSenha);
      cy.getByTestId("email-input").type("teste@gmail");
      cy.getByTestId("checkbox-input").click();
      cy.getByTestId("botao-enviar").click();
    });

    it("Deve apresentar uma mensagem", () => {
      cy.getByTestId("email-input-mensagem-erro").should("exist");
    });

    it("Deve apresentar uma mensagem correta", () => {
      cy.getByTestId("email-input-mensagem-erro").should(
        "have.text",
        "O email digitado é inválido"
      );
    });
  });

  it("Deve realizar o cadastro com sucesso", () => {
    cy.getByTestId("nome-input").type(mockNome);
    cy.getByTestId("email-input").type(mockEmail);
    cy.getByTestId("senha-input").type(mockSenha);
    cy.getByTestId("checkbox-input").click();
    cy.getByTestId("botao-enviar").click();

    cy.getByTestId("mensagem-sucesso")
      .should("exist")
      .and("have.text", "Usuário cadastrado com sucesso!");
  });
});
