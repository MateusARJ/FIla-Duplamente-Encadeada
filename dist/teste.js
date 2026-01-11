"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filaDuplamenteEncadeada_1 = require("./fila/filaDuplamenteEncadeada");
const lista = new filaDuplamenteEncadeada_1.ListaDuplamenteEncadeada();
console.log("=== TESTE: Lista vazia ===");
console.log(lista.estaVazia()); // true
console.log(lista.obterTamanho()); // 0
console.log("\n=== TESTE: Adicionar no início ===");
lista.adicionarNoInicio(10);
lista.adicionarNoInicio(5);
lista.exibirInicioFim(); // 5 10
console.log("\n=== TESTE: Adicionar no final ===");
lista.adicionarNoFinal(20);
lista.adicionarNoFinal(30);
lista.exibirInicioFim(); // 5 10 20 30
console.log("\n=== TESTE: Tamanho ===");
console.log(lista.obterTamanho()); // 4
console.log("\n=== TESTE: Adicionar na posição ===");
lista.adicionarNaPosicao(2, 15);
lista.exibirInicioFim(); // 5 10 15 20 30
console.log("\n=== TESTE: Exibir do fim para o início ===");
lista.exibirFimInicio(); // 30 20 15 10 5
console.log("\n=== TESTE: Existe ===");
console.log(lista.existe(15)); // true
console.log(lista.existe(99)); // false
console.log("\n=== TESTE: Remover início ===");
console.log(lista.removerInicio()); // 5
lista.exibirInicioFim(); // 10 15 20 30
console.log("\n=== TESTE: Remover final ===");
console.log(lista.removerFinal()); // 30
lista.exibirInicioFim(); // 10 15 20
console.log("\n=== TESTE: Remover na posição ===");
console.log(lista.removerNaPosicao(1)); // 15
lista.exibirInicioFim(); // 10 20
console.log("\n=== TESTE: Estado final ===");
lista.exibirInicioFim(); // 10 20
console.log("Tamanho:", lista.obterTamanho()); // 2
console.log("Vazia?", lista.estaVazia()); // false
console.log("\n=== TESTE: Remover tudo ===");
lista.removerInicio();
lista.removerInicio();
console.log("Vazia?", lista.estaVazia()); // true
console.log("Remover de lista vazia:", lista.removerFinal()); // null
