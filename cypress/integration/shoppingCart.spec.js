describe('E2E Test for shopping cart app', () => {
    it('Visits my Shopping cart app', () => {
        cy.wait(2000);
        cy.visit('https://marni-shopping-cart.netlify.app/')
        cy.wait(2000);
        // Find the link to login to app'
        cy.contains('here').click();
        cy.wait(2000);
        // Add any item to the cart
        cy.contains('Add to Cart').click();
        cy.wait(2000);
        // After adding item clicking on checkout
        cy.contains('Checkout').click();
        cy.wait(2000);
        // Add few more items in checkout page
        cy.contains('1').click();
        cy.wait(2000);
        // Add few more items in checkout page
        cy.contains('1').click();
        cy.wait(2000);
        // Place order after adding items
        cy.contains('Place Order').click();
        cy.wait(2000);
        // After placing order confirm and redirect to dashboard
        cy.contains('Place order').click();
    })
})