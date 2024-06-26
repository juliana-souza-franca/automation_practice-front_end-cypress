/// <reference types="cypress" />
import "allure-cypress/commands";

const element_register = require("../fixtures/elemento_cadastro.json")

import { faker } from '@faker-js/faker';


beforeEach(() => {
  cy.visit('/')
})

afterEach(() => {
  cy.screenshot()
})

describe('Cadastro de usuário', () => {
  it('cadastrar um usuário com sucesso', () => {
    const FirstName = faker.person.firstName()
    const LastName = faker.person.lastName()
    const Email = faker.internet.email()
    const Password = faker.internet.password();
  
    cy.get(element_register.BUTTON_SIGNIN).click()
    cy.get(element_register.INPUT_EMAIL).type(Email).should('be.visible')
    cy.get(element_register.BUTTON_CREATE_ACCOUNT).click()
    cy.get(element_register.RADIO_TITLE).click()
    cy.get(element_register.INPUT_FIRST_NAME).type(FirstName).should('be.visible')
    cy.get(element_register.INPUT_LAST_NAME).type(LastName).should('be.visible')
    cy.get(element_register.INPUT_PASSWORD).type(Password).should('be.visible')
    cy.get(element_register.SELECT_DAYS).select('13').should('have.value', '13');
    cy.get(element_register.SELECT_MONTHS).select('4').should('have.value', '4');
    cy.get(element_register.SELECT_YEARS).select('1987').should('have.value', '1987');
    cy.get(element_register.CHECKBOX).click()
    cy.get(element_register.BUTTON_REGISTER).click()
   

    // cy.wrap ele armazena o valor digitado no campo e atribui uma variavel
    cy.wrap(FirstName).as('FirstName')
    cy.wrap(LastName).as('LastName')
    cy.wrap(Password).as('Password')
     
   

    // Verifica se os valores armazenadossão os mesmos que foram digitados
    cy.get('@FirstName').then(storedFirstName => {
      expect(storedFirstName).to.equal(FirstName);
    });
    
    cy.get('@LastName').then(storedLastName => {
      expect(storedLastName).to.equal(LastName);
    });
   
    cy.get('@Password').then(storedLastName => {
      expect(storedLastName).to.equal(Password);
    });

    
    cy.get(element_register.MESSAGE_SUCESS).should('contain.text', 'Your account has been created.')
    
  })
})