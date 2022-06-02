/// <reference types="cypress" />

describe('It visits the todo website', () => {
    before(() => {
        cy.goTo()
    })

    // Creates the list items
    it('Creates the first list item', () => {
        cy.get('.new-todo').type('Fkn owning this sh*t{enter}')
        cy.get('.new-todo').type('Attempting to own this shit{enter}')
        cy.get('.new-todo').type('Another test to try out{enter}')
        cy.get('.todo-list li').should('have.length', 3)
    })

    // Creates the third list item and confirms the amount of list items
    it('Creates the third list item and confirms the amount of list items', () => {
        // Confirms there's 3 list items and the li titles
        cy.get('.todo-list li').should('have.length', 3)

        // Confirms the list item names
        cy.get('.todo-list li').eq(0).should('have.text', 'Fkn owning this sh*t')
        cy.get('.todo-list li').eq(1).should('have.text', 'Attempting to own this shit')
        cy.get('.todo-list li').eq(2).should('have.text', 'Another test to try out')
    })

    // Checks off a list item and ensures it has been completed 
    it("Checks off a list item and ensures it has been completed", () => {
        // Checks the list item "Fkn owning this sh*t"
        cy.contains('Fkn owning this sh*t')
        .parent()
        .find('input[type=checkbox]')
        .check()

        // Ensures the list item "Fkn owning this sh*t" is completed
        cy.contains('Fkn owning this sh*t')
        .parents('li')
        .should('have.class', 'completed')
    })

    // It clears the completed list items and makes sure the list is empty
    it("Checks that there's a completed item in the completed list, delete it and go back to the home screen", () => {

        cy.contains('Completed').click()
  
        cy.get('.todo-list li')
          .should('have.length', 1)
          .first()
          .should('have.text', 'Fkn owning this sh*t')
  
        cy.contains('Attempting to own this shit').should('not.exist')
        cy.contains('Another test to try out').should('not.exist')
      })
})