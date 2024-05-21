require('cypress-xpath');
const btn = require('../elements/login.elements').BOTOES
const campos = require('../elements/login.elements').CAMPOS

class  login{

 
    clicarMostrarEntrar(){
        cy.xpath(btn.btnMostrarEntrar)
        .click()
    }

    clicarEntrar(){
        cy.get(btn.btnEntrar, { timeout: 10000 }).eq(0)
        .click({ force: true })
    }


    inputEmail(dado){
        cy.get(campos.email).type(dado)
    }
    
    inputSenha(dado){
        cy.get(campos.senha).type(dado).type('{enter}')
    }

}

export default new login();