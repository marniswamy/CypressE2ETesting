describe('E2E Test for shopping cart app', () => {
    it('Visits my Shopping cart app', () => {
        cy.visit('https://marni-shopping-cart.netlify.app/')
        // Find the link to login to app'
        cy.contains('here').click();
        // Add any item to the cart
        cy.contains('Add to Cart').click();
        // After adding item clicking on checkout
        cy.contains('Checkout').click();
        // Add few more items in checkout page
        cy.contains('1').click();
        // Add few more items in checkout page
        cy.contains('1').click();
        // Place order after adding items
        cy.contains('Place Order').click();
        // After placing order confirm and redirect to dashboard
        cy.contains('Place order').click();
    })
})