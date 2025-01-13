const moment = require("moment");

const valorRandomico = (Math.random() * 1000).toFixed(0);
const momentAtual = moment().locale("pt-br");
const dataAtual = momentAtual.format("DD/MM/YYYY");
const mesAtual =
  momentAtual.format("MMMM")[0].toUpperCase() +
  momentAtual.format("MMMM").slice(1);

describe("Jornada do usuário, deve realizar o login, realizar uma ação e sair", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.loginWithCorrectCredentials();
  });

  describe("Realizar uma transferência", () => {
    it("Deve realizar uma transferência", () => {
      cy.getByTestId("select-opcoes").select("Transferência");
      cy.getByTestId("form-input").type(valorRandomico);
      cy.getByTestId("realiza-transacao").click();

      cy.getByTestId("form-input").should("be.empty");
    });

    describe("Validação", () => {
      it("Deve possuir o valor correto", () => {
        cy.getByTestId("lista-transacoes")
          .find("li")
          .last()
          .should("contain", `- R$ ${valorRandomico}`);
      });

      it("Deve possuir o mês correto", () => {
        cy.getByTestId("lista-transacoes")
          .find("li")
          .last()
          .should("contain", mesAtual);
      });

      it("Deve possuir a data correta", () => {
        cy.getByTestId("lista-transacoes")
          .find("li")
          .last()
          .should("contain", dataAtual);
      });

      it("Deve possuir o tipo correto", () => {
        cy.getByTestId("lista-transacoes")
          .find("li")
          .last()
          .should("contain", "Transferência");
      });
    });
  });

  describe("Realizar um depósito", () => {
    it("Deve realizar uma depósito", () => {
      cy.getByTestId("select-opcoes").select("Depósito");
      cy.getByTestId("form-input").type(valorRandomico);
      cy.getByTestId("realiza-transacao").click();

      cy.getByTestId("form-input").should("be.empty");
    });

    describe("Validação", () => {
      it("Deve possuir o valor correto", () => {
        cy.getByTestId("lista-transacoes")
          .find("li")
          .last()
          .should("contain", `R$ ${valorRandomico}`);
      });

      it("Deve possuir o mês correto", () => {
        cy.getByTestId("lista-transacoes")
          .find("li")
          .last()
          .should("contain", mesAtual);
      });

      it("Deve possuir a data correta", () => {
        cy.getByTestId("lista-transacoes")
          .find("li")
          .last()
          .should("contain", dataAtual);
      });

      it("Deve possuir o tipo correto", () => {
        cy.getByTestId("lista-transacoes")
          .find("li")
          .last()
          .should("contain", "Depósito");
      });
    });
  });

  afterEach(() => {
    cy.logout();
  });
});
