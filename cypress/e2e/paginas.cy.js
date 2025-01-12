describe("Testando múltiplas páginas", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.loginWithCorrectCredentials();
  });

  describe("Página home", () => {
    it("A rota deve ser a home", () => {
      cy.location("pathname").should("eq", "/home");
    });

    it("Deve possuir o título principal", () => {
      cy.getByTestId("titulo-principal").should("exist");
    });

    it("O título deve estar adequado", () => {
      cy.getByTestId("titulo-principal").should(
        "have.text",
        "Bem vindo de volta!"
      );
    });
  });

  describe("Página de cartões", () => {
    beforeEach(() => {
      cy.getByTestId("app-home").find("a").eq(1).click();
    });

    it("A rota deve ser a de cartões", () => {
      cy.location("pathname").should("eq", "/home/cartoes");
    });

    it("Deve possuir um título", () => {
      cy.getByTestId("titulo-cartoes").should("exist");
    });

    it("O título deve ser o de cartões", () => {
      cy.getByTestId("titulo-cartoes").should("have.text", "Meus cartões");
    });
  });
});
