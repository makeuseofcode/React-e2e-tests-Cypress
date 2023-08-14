describe('Products Tests', () => {
    it('  fetches and displays the data', () => {
      const searchQuery = 'laptops';
  
      
      cy.visit('http://127.0.0.1:5173'); 
  
      // Type the search query in the input field and click the submit button
      cy.get('#text').type(searchQuery);
      cy.get('#btn').contains('Submit').click();
  
      // Wait for the products to load and then check their presence
      cy.get('.product').should('have.length.greaterThan', 0);
  
      // Check if product details like title, price, and rating are displayed
      cy.get('.product').first().should('contain', 'Title'); 
      cy.get('.product').first().should('contain', 'Price: $');
    });

  });
  
