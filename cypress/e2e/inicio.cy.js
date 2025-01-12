describe("Página inicial", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Deve acessar a página inicial da aplicação", () => {
    cy.title().should("eq", "Bytebank");
  });

  it("O título principal deve estar adequado", () => {
    cy.verifyContent(
      "titulo-principal",
      "Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!"
    );
  });

  describe("Vantagens da Bytebank", () => {
    it("O título das vantagens deve estar adequado", () => {
      cy.verifyContent(
        "titulo-vantagens-do-banco",
        "Vantagens do nosso banco:"
      );
    });

    describe("Conta e cartões gratuitos", () => {
      it("O título deve estar adequado", () => {
        cy.verifyContent("titulo-conta-cartoes", "Conta e cartão gratuitos");
      });
      it("O conteúdo deve estar adequado", () => {
        cy.verifyContent(
          "conteudo-conta-cartoes",
          "Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção."
        );
      });
    });

    describe("Saques sem custo", () => {
      it("O título deve estar adequado", () => {
        cy.verifyContent("titulo-saques-custo", "Saques sem custo");
      });
      it("O conteúdo deve estar adequado", () => {
        cy.verifyContent(
          "conteudo-saques-custo",
          "Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h."
        );
      });
    });

    describe("Programa de pontos", () => {
      it("O título deve estar adequado", () => {
        cy.verifyContent("titulo-programa-pontos", "Programa de pontos");
      });
      it("O conteúdo deve estar adequado", () => {
        cy.verifyContent(
          "conteudo-programa-pontos",
          "Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!"
        );
      });
    });
    describe("Seguro Dispositivos", () => {
      it("O título deve estar adequado", () => {
        cy.verifyContent("titulo-seguro-dispositivos", "Seguro Dispositivos");
      });
      it("O conteúdo deve estar adequado", () => {
        cy.verifyContent(
          "conteudo-seguro-dispositivos",
          "Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica."
        );
      });
    });
  });
});
