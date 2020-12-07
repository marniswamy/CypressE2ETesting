describe('E2E Test for shopping cart app', () => {
    it('Visits my Shopping cart app', () => {
        cy.visit('https://marni-shopping-cart.netlify.app/')
        // Find the link to login to app'
        cy.contains('here').click();
        // Find the link to login to app'
        cy.contains('Add to Cart').click();
        // Find the link to login to app'
        cy.contains('Checkout').click();
        // Find the link to login to app'
        cy.contains('1').click();
        // Find the link to login to app'
        cy.contains('1').click();
        // Find the link to login to app'
        cy.contains('Place Order').click();
        // Find the link to login to app'
        cy.contains('Place order').click();
    })
})