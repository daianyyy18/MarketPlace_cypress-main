const campos = require('../elements/realizarPedido.elements').CAMPOS
const btn = require('../elements/realizarPedido.elements').BOTOES


class  busca{

    inputBusca(dado){
        cy.get(campos.termo).type(dado)
    }
    
    clicarBuscar(){
        cy.get(btn.buscar)
        .click()
    }

    abrirPDP(){
        cy.get(btn.abrirPDP)
        .click()
    }

    addCarrinho(){
        cy.get(btn.addCarrinho)
        .click()
    }

    abrirCarrinho1(){
        cy.get(btn.clickAbrirCarrinhoabrirCarrinho)
        .click()
    }

    abrirCarrinho2(){
        cy.get(btn.btnAbrirCarrinho)
        .click()
    }

    filtrarItem(menu){
        cy.get(filtroItem.filtroToDo)
        .contains(menu)
        .and('be.visible')
        .click()
    }

    deletarItem(){
        cy.get(concluirItem.listaItens)
        .first()
        .find('button')
        .invoke('show')
        .click()
    }

    validarInput(texto){
        cy.get(elem.inputToDo)
        .should('have.attr', 'placeholder')
        .and('include', texto)
    }

    validarContador(numero){
        /**
         * site atualizou e agora não é mais necessário dar um find no elemento
         */
        cy.get(filtroItem.contador)
        // .find('strong')
        // .should('have.text', numero)
        .should('contains.text', numero)
    }

    validarSizeToDo(numero){
        cy.get(concluirItem.validarListaItens)
        .should('have.length', numero)
    }

}

export default new busca();