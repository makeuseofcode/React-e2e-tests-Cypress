describe('Error Handling Tests', () => {
    it('Displays error message for incorrect search query', () => {
      // Stub the network request to return an error
      cy.intercept('GET', /https:\/\/dummyjson\.com\/products\/category\/.*/, {
        statusCode: 404, // Not Found
        body: 'Product not found'
      }).as('fetchProducts');
  
      // Visit the app's URL
      cy.visit('http://127.0.0.1:5173');
  
      // Type an incorrect search query in the input field
      const incorrectSearchQuery = 'rocket';
      cy.get('#text').type(incorrectSearchQuery);
      cy.get('#btn').click();
  
      // Wait for the network request to be intercepted
      cy.wait('@fetchProducts');
  
      // Verify that the error message for product not found is displayed
      cy.contains('Product not found').should('be.visible');
    });
  });