describe('API Testing with Cypress', () => {

    beforeEach(() => {
        cy.request('GET', 'http://localhost:3000/todos').as('todos');
    });

    it('Validate the Content type', () => {
        cy.get('@todos')
            .its('headers')
            .its('content-type')
            .should('include', 'text/html; charset=UTF-8');
    });

    it('Validate the status code', () => {
        cy.get('@todos')
            .its('status')
            .should('equal', 200);
    });

})