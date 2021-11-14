/// <reference types="cypress" />

describe('accomplishments dashboard', () => {

    beforeEach(() => {
        cy.visit('/accomplishments')
    });


    it("should showcase error if information is missing", () => {
        const inputTitle = cy.get('[data-cy=accomplishment-title-input]')
        const inputTextArea = cy.get('[data-cy=accomplishment-input]')

        inputTitle.type('My baskettball accomplishments')
        inputTextArea.type('I made 10 threes in a row')
        cy.get('.Accomplishment-btn').click()
        cy.contains('Complete the items above to continue').should('be.visible')
    });
    it("should showcase error if information is missing but checkbox is checked", () => {

        const checkbox = cy.get('[data-cy=accomplishment-checkbox]')
        checkbox.click()
        cy.get('.Accomplishment-btn').click()
        cy.contains('Complete the items above to continue').should('be.visible')
    });

    it("should display validation component if all information is typed", () => {
        cy.get('[data-cy=accomplishment-title-input]').type('My baskettball accomplishments')
        
        cy.get('[data-cy=accomplishment-input]').type('I made 10 threes in a row')

        cy.get('[data-cy=accomplishment-checkbox]').click()

        cy.get('.Accomplishment-btn').click()

        cy.contains('This Accomplisment was Successfully Submitted').should('be.visible')

        cy.contains('Go Back').should('be.visible').click()
       
      

    })
    it("should return to the dashboard, with empty inputs  when go back button is clicked", () => {
        cy.get('[data-cy=accomplishment-title-input]').type('My baskettball accomplishments')
        
        cy.get('[data-cy=accomplishment-input]').type('I made 10 threes in a row')

        cy.get('[data-cy=accomplishment-checkbox]').click()

        cy.get('.Accomplishment-btn').click()

        cy.contains('This Accomplisment was Successfully Submitted').should('be.visible')

        cy.contains('Go Back').should('be.visible').click()
       
        cy.get('[data-cy=accomplishment-title-input]').should('have.value', '')
       
        cy.get('[data-cy=accomplishment-input]').should('not.have.text')
        cy.get('[data-cy=accomplishment-checkbox]').should('not.be.checked')

    })
})