/// <reference types="cypress" />
import "allure-cypress/commands";

const element_login = require("../fixtures/elemento_login.json")
const element_register = require("../fixtures/elemento_cadastro.json")
const dados_massa   =  require("../fixtures/massa_dados_login.json")

beforeEach(() => {
    cy.visit('/')
})

afterEach(() => {
    cy.screenshot()
  })

describe('Login de usuário', () => {
it('logar um usuário com sucesso', () => {
     cy.get(element_register.BUTTON_SIGNIN).click()
     cy.get(element_login.LOGIN_EMAIL).type(dados_massa.email).should('have.value', dados_massa.email)
     cy.get(element_login.LOGIN_PASSWORD).type(dados_massa.senha).should('have.value', dados_massa.senha)
     cy.get(element_login.BUTTON_LOGIN).click()
      console.log(element_login.MESSAGE_VALIDATA_LOGIN)
      cy.get(element_login.MESSAGE_VALIDATA_LOGIN).should('be.visible').and('have.text', 'Juliana França');
      } 
      
  
)})