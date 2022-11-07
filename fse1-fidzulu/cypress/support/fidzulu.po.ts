export default class fidzuluPage {
  navigate(url: string) {
    cy.visit('/' + url);
  }

  getTitle() {
    return cy.get('app-root h1');
  }

  clickServiceLink(serviceRouteName: string) {
    cy.get('div.services button')
      .contains(serviceRouteName, { timeout: 15000 })
      .click();
  }

  checkTableExists() {
    cy.get('app-zulu-table section').should('exist');
  }

  checkBikeTablePopulated() {
    cy.get('app-bikes-table').should('contain', 'Color');
    cy.get('app-bikes-table table tbody tr td').should('exist');
  }

  checkFoodTablePopulated() {
    cy.get('app-food-table ').should('contain', 'Calories');
    cy.get('app-food-table table tbody tr td').should('exist');
  }

  checkToysTablePopulated() {
    cy.get('app-toy-table ').should('contain', 'Age Group');
    cy.get('app-toy-table table tbody tr td').should('exist');
  }
}
