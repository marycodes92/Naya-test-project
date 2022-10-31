import { Naya } from '../page-objects/Naya-objects'
require

describe('Naya e2e tests', () => {
  const name = 'Sketch-' + new Date().getDate().toString();
  let naya = new Naya();

  it('Login test', () => {
    cy.visit('/');
    naya.loginForm('testing', '12345678')
    cy.get('.container > :nth-child(2) > .login-button').should('be.visible');
    cy.get(':nth-child(4) > center').should('be.visible').and('have.text', 'Work on an Existing Sketch');
    cy.get('#root > :nth-child(1)').snapshot();
  });

  it('create a new prooject', ()=>{
    naya.newProject(`${name}`, 'This is my first project');
    cy.get(':nth-child(1) > .card > .row > .col-sm-6 > div').should('be.visible').and('have.text', `${name}`);
    cy.get('.container > :nth-child(5)').snapshot();
  });

  it('view and edit a project', ()=>{
    naya.viewProject();
    cy.get('#root').snapshot();
  });

  it('Logout', ()=>{
    cy.get('.col > .login-button').click();
    cy.get('.container').snapshot();
  })
});