describe("Início", () => {
  it("Deve acessar a página inicial da aplicação", () => {
    cy.visit("http://localhost:3000");
  });
});

describe("Vantagens da Bytebank", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Deve verificar se o título está correto", () => {
    cy.contains("Vantagens do nosso banco:");
  });

  it("Deve verificar se o texto relacionado à Conta e cartões seguros está correto", () => {
    cy.contains("Conta e cartão gratuitos");
    cy.contains(
      "Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção."
    );
  });

  it("Deve verificar se o texto relacionado à Saques sem custo está correto", () => {
    cy.contains("Saques sem custo");
    cy.contains(
      "Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h."
    );
  });

  it("Deve verificar se o texto relacionado à Programa de pontos está correto", () => {
    cy.contains("Programa de pontos");
    cy.contains(
      "Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!"
    );
  });

  it("Deve verificar se o texto relacionado à Seguro Dispositivos está correto", () => {
    cy.contains("Seguro Dispositivos");
    cy.contains(
      "Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica."
    );
  });
});
