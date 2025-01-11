describe("Página inicial", () => {
  it("Deve acessar a página inicial da aplicação", () => {
    cy.visit("http://localhost:3000");
  });

  describe("Vantagens da Bytebank", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });

    it("Deve verificar se o título principal está correto", () => {
      cy.getByTestId("titulo-principal").contains(
        "Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!"
      );
    });

    it("Deve verificar se o título de vantagens está correto", () => {
      cy.getByTestId("titulo-vantagens-do-banco").contains(
        "Vantagens do nosso banco:"
      );
    });

    it("Deve verificar se o texto relacionado à Conta e cartões seguros está correto", () => {
      cy.getByTestId("titulo-conta-cartoes").contains(
        "Conta e cartão gratuitos"
      );
      cy.getByTestId("conteudo-conta-cartoes").contains(
        "Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção."
      );
    });

    it("Deve verificar se o texto relacionado à Saques sem custo está correto", () => {
      cy.getByTestId("titulo-saques-custo").contains("Saques sem custo");
      cy.getByTestId("conteudo-saques-custo").contains(
        "Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h."
      );
    });

    it("Deve verificar se o texto relacionado à Programa de pontos está correto", () => {
      cy.getByTestId("titulo-programa-pontos").contains("Programa de pontos");
      cy.getByTestId("conteudo-programa-pontos").contains(
        "Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!"
      );
    });

    it("Deve verificar se o texto relacionado à Seguro Dispositivos está correto", () => {
      cy.getByTestId("titulo-seguro-dispositivos").contains(
        "Seguro Dispositivos"
      );
      cy.getByTestId("conteudo-seguro-dispositivos").contains(
        "Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica."
      );
    });
  });
});
