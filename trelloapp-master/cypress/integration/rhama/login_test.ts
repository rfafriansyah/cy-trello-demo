it("Login test", () => {
  cy.visit("/");
  cy
    .get("[data-cy=login-menu]")
    .click()
  cy
    .contains('Sign up here')
    .click()
  cy
    .get('[data-cy=signup-email]')
    .type('rhama@demo')
  cy
    .get('[data-cy=signup-password]')
    .type('1234')
  cy
    .get('[data-cy=signup]')
    .click()

});
