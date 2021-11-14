/// <reference types="cypress" />

describe('Locators', ()=> {

    beforeEach(()=> {
        cy.visit('/elements')
    })

    it('should find a sidenav', ()=> {
        cy.get("[class='SideNav']")
    });

    it('should find an anchor with text of "Habit"', ()=> {
        const buttonHabit = cy.contains("a", 'Habit')
        buttonHabit.click()
    });

    it('should find a button with text of "Add" + interaction', ()=> {
        const buttonAdd = cy.contains('Add')
     
    })
})