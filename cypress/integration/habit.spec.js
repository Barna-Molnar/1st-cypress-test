/// <reference types="cypress" />

describe('habit dashboard', () => {

    beforeEach(() => {
        cy.visit('/habits')
    })

    it('should display modal whenn add button is clicked', () => {
        cy.contains('button', "Add").click()
        cy.contains("Add a new habit").should('be.visible')
    });

    it('should display habit card when a new habit is added', () => {
        cy.get('#habit-add-btn').click()
        const habitInput = 'first habit'
        cy.get("input[placeholder='Habit']").type(habitInput)
        cy.contains('Save Changes').click()
        const habitCard = cy.get('div.HabitCard').should('be.visible')
        habitCard.contains(habitInput)
            .should('be.visible')
            .should('have.class', 'HabitCard__habit-container')
    });

    it('should toggle icon when habbit card it clicked', ()=> {
        cy.get('#habit-add-btn').click()
        const habitInput = 'first habit'
        cy.get("input[placeholder='Habit']").type(habitInput)
        cy.contains('Save Changes').click()
        const Xmark =  cy.get('[src="/static/media/close.fa7e5ead.svg"]')
        Xmark.should('be.visible')
        cy.contains(habitInput).click()
        
        const checkedMark = cy.get('[src="/static/media/check.9e8832df.svg"]')
        checkedMark.should('be.visible')

        

    });
    it("should nothing happen if we don't type in the inputField and click 'Save Changes' button ",  ()=> {
        cy.get('#habit-add-btn').click()
        cy.contains("Add a new habit").should('be.visible')
        cy.contains('Save Changes').click()
        cy.contains("Add a new habit").should('be.visible')
        cy.contains('Close').click()
        cy.contains("Add a new habit").should('not.exist')

    })

})