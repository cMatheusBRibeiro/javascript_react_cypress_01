describe("Formulário de login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  describe("E-mail passado é inválido", () => {
    beforeEach(() => {
      cy.getByTestId("botao-login").click();
      cy.getByTestId("email-input").type("admin@gmail");
      cy.getByTestId("senha-input").type("123456");
      cy.getByTestId("botao-enviar").click();
    });

    it("Deve exibir uma mensagem", () => {
      cy.getByTestId("email-input-mensagem-erro").should("exist");
    });

    it("Deve exibir uma mensagem correta", () => {
      cy.getByTestId("email-input-mensagem-erro").should(
        "have.text",
        "O email digitado é inválido"
      );
    });
  });

  describe("E-mail é obrigatório e deixa em branco", () => {
    beforeEach(() => {
      cy.getByTestId("botao-login").click();
      cy.getByTestId("senha-input").type("123456");
      cy.getByTestId("botao-enviar").click();
    });

    it("Deve exibir uma mensagem", () => {
      cy.getByTestId("email-input-mensagem-erro").should("exist");
    });

    it("Deve exibir uma mensagem correta", () => {
      cy.getByTestId("email-input-mensagem-erro").should(
        "have.text",
        "O campo email é obrigatório"
      );
    });
  });
});
