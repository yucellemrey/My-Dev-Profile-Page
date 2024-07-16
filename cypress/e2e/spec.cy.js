beforeEach(() => {
  cy.visit("http://localhost:5173/");
});

describe("Open Github Projects", () => {
  it("should be able to open the first project", () => {
    cy.get('[data-cy="github-link-1"]').should(
      "have.attr",
      "href",
      "https://github.com/yucellemrey"
    );
  });
  it("should be able to open the second project", () => {
    cy.get('[data-cy="github-link-2"]').should(
      "have.attr",
      "href",
      "https://github.com/yucellemrey"
    );
  });
  it("should be able to open the third project", () => {
    cy.get('[data-cy="github-link-3"]').should(
      "have.attr",
      "href",
      "https://github.com/yucellemrey"
    );
  });
});

describe("Send Mail", () => {
  it("should open the mail client with the correct email address", () => {
    cy.get('[data-cy="checkSendMail"]').should(
      "have.attr",
      "href",
      "mailto:emreyucel97@outlook.com"
    );
  });
});

describe("Translate", () => {
  it("should translate the page accordingly", () => {
    cy.get('[data-cy="checkSwitchToTr"]').click();
    cy.get(`[data-cy="projectsTest"]`).should("contain", "Projeler");
  });
});
