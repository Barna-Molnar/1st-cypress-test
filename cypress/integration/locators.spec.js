/// <reference types="cypress" />

describe('Locators', ()=> {

    beforeEach(()=> {
        cy.visit('/elements')
    })

    it('locating element with get', ()=> {
        // getting all elements by tag name
        cy.get('button')
        cy.get('h3')
        cy.get('h2') 


        // getting all elements by  className
        cy.get('.btn-with-class') 

        //get all elements with specific classes
        cy.get('[class="Elements-btn btn-with-class more-btn-classes"]')
        
        //get all elements with id
        cy.get("#btn-with-id")

        //get all elements by specific attribute
        
        cy.get("[type='submit']")

        //get all elements by tag name AND class
        cy.get("button.Elements-btn")

        // get all elements by tag AND class AND id
        cy.get("button.Elements-btn#btn-with-id")

        // get all elements by tag name AND class AND type attribute
        cy.get("button.Elements-btn[type='submit']")

        // get all elements with specific data id 
        cy.get("[data-cy='btn-id-1']")
        cy.getByTestId('btn-id-1')

    })

});