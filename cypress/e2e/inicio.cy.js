describe("Página inicial", () => {
  it("Deve acessar a página inicial da aplicação", () => {
    cy.visit("http://localhost:3000");
  });

  it("Deve verificar se o título principal está correto", () => {
    cy.visit("http://localhost:3000");
    cy.getByTestId("titulo-principal").should(
      "contain",
      "Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!"
    );
  });

  describe("Vantagens da Bytebank", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });

    it("Deve verificar se o título de vantagens está correto", () => {
      cy.getByTestId("titulo-vantagens-do-banco").should(
        "contain",
        "Vantagens do nosso banco:"
      );
    });

    describe("Conta e cartões gratuitos", () => {
      it("Deve verificar se o título está correto", () => {
        cy.getByTestId("titulo-conta-cartoes").should(
          "contain",
          "Conta e cartão gratuitos"
        );
      });
      it("Deve verificar se o conteúdo está correto", () => {
        cy.getByTestId("conteudo-conta-cartoes").should(
          "contain",
          "Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção."
        );
      });
    });

    describe("Saques sem custo", () => {
      it("Deve verificar se o título está correto", () => {
        cy.getByTestId("titulo-saques-custo").should(
          "contain",
          "Saques sem custo"
        );
      });
      it("Deve verificar se o conteúdo está correto", () => {
        cy.getByTestId("conteudo-saques-custo").should(
          "contain",
          "Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h."
        );
      });
    });

    describe("Programa de pontos", () => {
      it("Deve verificar se o título está correto", () => {
        cy.getByTestId("titulo-programa-pontos").should(
          "contain",
          "Programa de pontos"
        );
      });
      it("Deve verificar se o conteúdo está correto", () => {
        cy.getByTestId("conteudo-programa-pontos").should(
          "contain",
          "Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!"
        );
      });
    });
    describe("Seguro Dispositivos", () => {
      it("Deve verificar se o título está correto", () => {
        cy.getByTestId("titulo-seguro-dispositivos").should(
          "contain",
          "Seguro Dispositivos"
        );
      });
      it("Deve verificar se o conteúdo está correto", () => {
        cy.getByTestId("conteudo-seguro-dispositivos").should(
          "contain",
          "Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica."
        );
      });
    });
  });
});
