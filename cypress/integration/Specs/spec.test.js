/// <reference types="cypress" />

describe('It visits the todo website', () => {
    before(() => {
        cy.goTo()
    })

    //Creates the first list item
    it('Creates the first list item', () => {
        cy.get('.new-todo').type('Fkn owning this shit{enter}')
    })

    //Creates the second list item
    it('Creates the second list item', () => {
        cy.get('.new-todo').type('Attempting to own shit{enter}')
    })
})