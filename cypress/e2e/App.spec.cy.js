describe('App Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/'); 
  });

  it('Renders input field and submit button', () => {
    // Check if the input field is rendered
    cy.get('#text').should('exist').should('be.visible');

    // Check if the submit button is rendered
    cy.get('#btn').should('exist').should('be.visible').contains('Submit');
  });

  it(' Enters a search query ', () => {
    const searchQuery = 'laptops';

    // Enter the search query
    cy.get('#text').type(searchQuery);

  });
});