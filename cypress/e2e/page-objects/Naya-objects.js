export class Naya {
    loginForm(username, password){
        cy.get(':nth-child(3) > .col-sm-12 > .form-control').type(username);
        cy.get(':nth-child(4) > .col-sm-12 > .form-control').type(password);
        cy.get('.col-sm-12 > div > button').click();
        cy.get('.hue-horizontal').click();
        cy.get('[style="position: fixed; inset: 0px;"]').click();
        cy.get('.login-button').click();
    }

    newProject(name, text){
        cy.get('.container > :nth-child(2) > .login-button').click();
        cy.get(':nth-child(1) > .form-control').type(name)
        cy.get('[label="Text"]').type(text);
        cy.get('[color="primary"]').click();
        cy.get(':nth-child(3) > :nth-child(2) > .btn').click();
    }

    viewProject(){
        cy.get(':nth-child(1) > .card > .row').click();
        cy.get(':nth-child(1) > .card > .row > .col-sm-6 > .login-button').trigger()
    }
}