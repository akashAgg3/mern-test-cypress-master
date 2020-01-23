describe('Cypress Test frontend', () => {

    it('Navigate to todo creation page', () => {
        cy.visit("http://localhost:3000/create");
        cy.title().should('include', 'Creation Page')
    })

    it('Verify Header', () => {
        cy.get('h3').should('have.text', 'Create New Todo')

    })

    it('Create Todo', () => {

        cy.get(':nth-child(1) > .form-control').type('firstTodo')
        cy.get(':nth-child(2) > .form-control').type('testing')
        cy.get('#priorityMedium').click()
        cy.get('.btn').click()
    })

    it('Test Todo list navigation', () => {
        cy.title().should('include', 'List Page')
    })

    it('Verify Created Todo in Todo list', () => {

        cy.get('tbody>tr').find('td').each(function(index) {
            cy.get(index).should('have.text', "firstTodo")
        })
    })


    it('update  a todo and mark it completed and then verify', () => {

        cy.get(':nth-child(1) > :nth-child(4) > a').click()
        cy.get('#completedCheckbox').click()
        cy.get(':nth-child(6) > .btn').click()
        cy.title().should('include', 'List Page')
        cy.get('tbody > :nth-child(1) > :nth-child(1)').should('have.class', 'completed')
    })

    /**
     * This will fail as it is a Bug
     */
    it('Delete a todo', () => {
        cy.get(':nth-child(1) > :nth-child(4) > a').click()
        cy.get('.btn-danger').click()
        cy.get(':nth-child(1) > :nth-child(4) > a').should('not.be.visible')
    })

})