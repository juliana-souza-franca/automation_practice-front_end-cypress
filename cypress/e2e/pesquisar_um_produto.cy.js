/// <reference types="cypress" />

const seach = require('../fixtures/elemento_pesquisa.json')

beforeEach(() => {
    cy.visit('/')
})

afterEach(() => {
    cy.screenshot()
  })
describe('Pesquisar um produto', () => {
    
 it('pesquisar um produto com sucesso', () => {
    cy.get(seach.INPUT_PESQUISA).type('Blouse').should('have.value', 'Blouse')
    cy.get(seach.BUTTON_PESQUISA).click()
    cy.get(seach.MENSSAGE_VALIDATA_SEACH).should('contain.text', 'Blouse')
    
 })
})