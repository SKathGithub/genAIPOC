//import cypress-cucumber-preprocessor/steps
import { setDefaultTimeout } from "cucumber";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I am on the registration page', () => {
    cy.visit('https://demo.wpeverest.com/user-registration/guest-registration-form/')
})

When('I fill first name with {string}', (firstName) => {
    cy.get('#first_name').type(firstName)
})

When('I fill last name with {string}', (lastName) => {
    cy.get('#last_name').type(lastName)
})

When ('I fill email with {string}', (email) => {
    email= "shweta.kath" + Math.random() + "@gmail.com"
    cy.get('#user_email').type(email)
})

When ('I fill gender as Female', () => {
    cy.get('#radio_1665627729_Female').click()
})

When ('I fill password with {string}', (password) => {
    cy.get('#user_pass').type(password)
})

When('I fill phone number with {string}', (phoneNumber) => {
    cy.get('#phone_1665627880').type(phoneNumber)
}) 

When ('I fill emergency contact number with {string}', (emergencyContactName) => {     
    cy.get('#phone_1665627865').type(emergencyContactName)
})

When('I fill room And bed type as {string}', (roomWhenBedType) => {    
    cy.get('#input_box_1665630010').type(roomWhenBedType)
})

When("I fill occupation And place of employment as {string}", (occupationWhenPlaceOfEmployment) => {        
    cy.get('#textarea_1665630078').type(occupationWhenPlaceOfEmployment)
}) 

When('I fill parking as {string}', (parking) => {    
    cy.get('#radio_1665627931_Yes').click()
})  

When('I fill room preference as {string}', (roomPreference) => {    
    cy.get('input[value="Single Room"]').click()
}) 

When('I fill dietary preference as {string}', (dietaryPreference) => {                                                           
    cy.get('#radio_1665628131_Vegetarian').click()
})

When('I select terms and conditions', () => {
    cy.get('#privacy_policy_1665633140').click()
})

When('I click on submit button', () => {
    cy.get('button[type= "submit"]').click()
})  

Then('I should see user successfully registered message', () => {
    cy.get('div[class= "ur-message user-registration-message"]').should('be.visible')
})