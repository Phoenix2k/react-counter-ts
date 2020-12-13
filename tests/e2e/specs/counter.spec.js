/// <reference types="cypress" />

describe('Basic counting', () => {
  it('Root url responds', () => {
    cy.visit('/');
    cy.get('header h1').contains('React');
    cy.get('header h1').contains('Counter');
  });
  it('Counts up and down but never goes below zero', () => {
    cy.visit('/');
    cy.get('.counter-value').should('have.value', '0');
    cy.get('[data-action="increment"]').click();
    cy.get('.counter-value').should('have.value', '1');
    cy.get('[data-action="increment"]').click();
    cy.get('.counter-value').should('have.value', '2');
    cy.get('[data-action="decrement"]').click();
    cy.get('.counter-value').should('have.value', '1');
    cy.get('[data-action="decrement"]').click();
    cy.get('.counter-value').should('have.value', '0');
    cy.get('[data-action="decrement"]').click();
    cy.get('.counter-value').should('have.value', '0');
  });
});
