/// <reference types="cypress" />

const cart = require('../fixtures/elemento_add_carrinho.json')

beforeEach(() => {
  cy.visit('/')  
})

afterEach(() => {
  cy.screenshot()
})

describe('Adicionar o produto no carrinho', () => {
 
it('adicionar um produto no carrinho com sucesso', () => {
    cy.get(cart.MENU_WOMEN).click()
    cy.get(cart.PRODUCT).click()
    cy.get(cart.COLOR).click()
    cy.get(cart.BUTTON_CART).click({force:true})
    
   
    cy.get(cart.VALIDATE_CART).should('contain.text', 'There is 1 item in your cart.')
})
    
})