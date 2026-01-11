"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaDuplamenteEncadeada = exports.Elemento = void 0;
class Elemento {
    constructor(val) {
        this.valor = val;
        this.proximo = null;
        this.anterior = null;
    }
}
exports.Elemento = Elemento;
class ListaDuplamenteEncadeada {
    constructor() {
        this.inicio = null;
        this.fim = null;
        this.tamanho = 0;
    }
    estaVazia() {
        return this.tamanho === 0;
    }
    obterTamanho() {
        return this.tamanho;
    }
    adicionarNoInicio(valor) {
        let novo = new Elemento(valor);
        if (this.inicio == null) {
            this.inicio = novo;
            this.fim = novo;
        }
        else {
            novo.proximo = this.inicio;
            this.inicio.anterior = novo;
            this.inicio = novo;
        }
        this.tamanho++;
    }
    adicionarNoFinal(valor) {
        let novo = new Elemento(valor);
        if (this.inicio == null) {
            this.inicio = novo;
            this.fim = novo;
        }
        else {
            this.fim.proximo = novo;
            novo.anterior = this.fim;
            this.fim = novo;
        }
        this.tamanho++;
    }
    adicionarNaPosicao(pos, valor) {
        if (pos < 0 || pos > this.tamanho) {
            console.error("Posição inválida!");
            return;
        }
        if (pos === 0) {
            this.adicionarNoInicio(valor);
            return;
        }
        if (pos === this.tamanho) {
            this.adicionarNoFinal(valor);
            return;
        }
        let novo = new Elemento(valor);
        let aux = this.inicio;
        let i = 0;
        while (i < pos) {
            aux = aux.proximo;
            i++;
        }
        novo.proximo = aux;
        novo.anterior = aux.anterior;
        aux.anterior.proximo = novo;
        aux.anterior = novo;
        this.tamanho++;
    }
    removerInicio() {
        if (this.inicio == null) {
            return null;
        }
        let valor = this.inicio.valor;
        if (this.inicio == this.fim) {
            this.inicio = null;
            this.fim = null;
        }
        else {
            this.inicio = this.inicio.proximo;
            this.inicio.anterior = null;
        }
        this.tamanho--;
        return valor;
    }
    removerFinal() {
        if (this.fim == null) {
            return null;
        }
        let valor = this.fim.valor;
        if (this.inicio == this.fim) {
            this.inicio = null;
            this.fim = null;
        }
        else {
            this.fim = this.fim.anterior;
            this.fim.proximo = null;
        }
        this.tamanho--;
        return valor;
    }
    removerNaPosicao(pos) {
        if (this.inicio == null || pos < 0 || pos >= this.tamanho) {
            return null;
        }
        if (pos === 0) {
            return this.removerInicio();
        }
        if (pos === this.tamanho - 1) {
            return this.removerFinal();
        }
        let aux = this.inicio;
        let i = 0;
        while (i < pos) {
            aux = aux.proximo;
            i++;
        }
        let valor = aux.valor;
        aux.anterior.proximo = aux.proximo;
        aux.proximo.anterior = aux.anterior;
        this.tamanho--;
        return valor;
    }
    existe(valor) {
        let aux = this.inicio;
        while (aux != null) {
            if (aux.valor === valor) {
                return true;
            }
            aux = aux.proximo;
        }
        return false;
    }
    exibirInicioFim() {
        let aux = this.inicio;
        while (aux != null) {
            console.log(aux.valor);
            aux = aux.proximo;
        }
    }
    exibirFimInicio() {
        let aux = this.fim;
        while (aux != null) {
            console.log(aux.valor);
            aux = aux.anterior;
        }
    }
}
exports.ListaDuplamenteEncadeada = ListaDuplamenteEncadeada;
