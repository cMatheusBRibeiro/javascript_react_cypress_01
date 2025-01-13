describe(
  "Testando interface para dispositivos móveis",
  { viewportHeight: 667, viewportWidth: 375 },
  () => {
    beforeEach(() => {
      cy.visit("/");
      cy.loginWithCorrectCredentials();
    });

    describe("Menu Hamburguer", () => {
      it("Deve existir", () => {
        cy.getByTestId("menu-burguer").should("exist");
        cy.getByTestId("menu-burguer").click();
      });

      it("Ao clicar, deve abrir o menu", () => {
        cy.getByTestId("menu-burguer").click();
        cy.getByTestId("menu-lateral").should("be.visible");
      });
    });

    describe("Cartões", () => {
      beforeEach(() => {
        cy.getByTestId("menu-burguer").click();
      });

      it("Link para Cartões deve existir", () => {
        cy.getByTestId("menu-lateral")
          .find("a")
          .contains("Cartões")
          .should("exist");
      });

      it("Ao clicar no link, deve levar à página de cartões", () => {
        cy.getByTestId("menu-lateral").find("a").contains("Cartões").click();

        cy.location("pathname").should("eq", "/home/cartoes");
        cy.getByTestId("menu-burguer").click();
      });
    });

    describe("Serviços", () => {
      beforeEach(() => {
        cy.getByTestId("menu-burguer").click();
      });

      it("Link para Serviços deve existir", () => {
        cy.getByTestId("menu-lateral")
          .find("a")
          .contains("Serviços")
          .should("exist");
      });

      it("Ao clicar no link, deve levar à página de serviços", () => {
        cy.getByTestId("menu-lateral").find("a").contains("Serviços").click();

        cy.location("pathname").should("eq", "/home/servicos");
        cy.getByTestId("menu-burguer").click();
      });
    });

    describe("Investimentos", () => {
      beforeEach(() => {
        cy.getByTestId("menu-burguer").click();
      });

      it("Link para Investimentos deve existir", () => {
        cy.getByTestId("menu-lateral")
          .find("a")
          .contains("Cartões")
          .should("exist");
      });

      it("Ao clicar no link, deve levar à página de investimentos", () => {
        cy.getByTestId("menu-lateral")
          .find("a")
          .contains("Investimentos")
          .click();

        cy.location("pathname").should("eq", "/home/investimentos");
        cy.getByTestId("menu-burguer").click();
      });
    });

    afterEach(() => {
      cy.logoutInMobile();
    });
  }
);
