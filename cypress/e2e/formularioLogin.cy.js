describe("Formulário de login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("E-mail passado é inválido", () => {
    beforeEach(() => {
      cy.getByTestId("botao-login").click();
      cy.getByTestId("email-input").type("admin@gmail");
      cy.getByTestId("senha-input").type("123456");
      cy.getByTestId("botao-enviar").click();
    });

    it("Deve apresentar a mensagem de erro", () => {
      cy.getByTestId("email-input-mensagem-erro").should("exist");
    });

    it("A mensagem de e-mail inválido deve estar adequada", () => {
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

    it("Deve apresentar a mensagem de erro", () => {
      cy.getByTestId("email-input-mensagem-erro").should("exist");
    });

    it("A mensagem de e-mail obrigatório deve estar adequada", () => {
      cy.getByTestId("email-input-mensagem-erro").should(
        "have.text",
        "O campo email é obrigatório"
      );
    });
  });
});
