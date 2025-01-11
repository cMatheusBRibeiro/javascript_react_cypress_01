describe("Página inicial", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("URL"));
  });

  it("Deve acessar a página inicial da aplicação", () => {
    cy.title().should("eq", "Bytebank");
  });

  it("Deve verificar se o título principal está correto", () => {
    cy.verifyContent(
      "titulo-principal",
      "Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!"
    );
  });

  describe("Vantagens da Bytebank", () => {
    it("Deve verificar se o título de vantagens está correto", () => {
      cy.verifyContent(
        "titulo-vantagens-do-banco",
        "Vantagens do nosso banco:"
      );
    });

    describe("Conta e cartões gratuitos", () => {
      it("Deve verificar se o título está correto", () => {
        cy.verifyContent("titulo-conta-cartoes", "Conta e cartão gratuitos");
      });
      it("Deve verificar se o conteúdo está correto", () => {
        cy.verifyContent(
          "conteudo-conta-cartoes",
          "Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção."
        );
      });
    });

    describe("Saques sem custo", () => {
      it("Deve verificar se o título está correto", () => {
        cy.verifyContent("titulo-saques-custo", "Saques sem custo");
      });
      it("Deve verificar se o conteúdo está correto", () => {
        cy.verifyContent(
          "conteudo-saques-custo",
          "Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h."
        );
      });
    });

    describe("Programa de pontos", () => {
      it("Deve verificar se o título está correto", () => {
        cy.verifyContent("titulo-programa-pontos", "Programa de pontos");
      });
      it("Deve verificar se o conteúdo está correto", () => {
        cy.verifyContent(
          "conteudo-programa-pontos",
          "Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!"
        );
      });
    });
    describe("Seguro Dispositivos", () => {
      it("Deve verificar se o título está correto", () => {
        cy.verifyContent("titulo-seguro-dispositivos", "Seguro Dispositivos");
      });
      it("Deve verificar se o conteúdo está correto", () => {
        cy.verifyContent(
          "conteudo-seguro-dispositivos",
          "Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica."
        );
      });
    });
  });
});
