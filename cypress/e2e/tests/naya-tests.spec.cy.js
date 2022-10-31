import { Naya } from '../page-objects/Naya-objects'

describe('Login Module', () => {
  const name = 'Sketch-' + new Date().getDate().toString();
  let naya = new Naya();

  it('Valid login test', () => {
    cy.visit('/');
    naya.loginForm('user2', '123456');
    cy.wait(1000);
    cy.screenshot();

    cy.get('.container > :nth-child(2) > .login-button').should('exist');
    cy.get(':nth-child(4) > center').should('have.text', 'Work on an Existing Sketch');
  });

  it.skip('should create a new project', ()=>{
    naya.newProject('My Sketch','This is my first sketch project');
    cy.get(':nth-child(1) > .card > .row > .col-sm-6 > div').should('be.visible').and('have.text', `${name}`);
    cy.get(':nth-child(1) > .card > .row > .col-sm-6 > .login-button').should('exist');
    cy.screenshot();
  });

  it('should view and edit existing project', ()=>{
    naya.viewProject();
    cy.screenshot();
  });

  it.skip('Logout', ()=>{
    cy.get('.col > .login-button').click();
    cy.get('.container > :nth-child(2)').should('be.visible');
    cy.screenshot();
  });
});