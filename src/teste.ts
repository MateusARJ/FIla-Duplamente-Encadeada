import { ListaDuplamenteEncadeada } from "./fila/filaDuplamenteEncadeada"

const lista = new ListaDuplamenteEncadeada()

console.log("=== TESTE: Lista vazia ===")
console.log(lista.estaVazia()) 
console.log(lista.obterTamanho()) 

console.log("\n=== TESTE: Adicionar no início ===")
lista.adicionarNoInicio(10)
lista.adicionarNoInicio(5)
lista.exibirInicioFim() 

console.log("\n=== TESTE: Adicionar no final ===")
lista.adicionarNoFinal(20)
lista.adicionarNoFinal(30)
lista.exibirInicioFim() 

console.log("\n=== TESTE: Tamanho ===")
console.log(lista.obterTamanho()) 

console.log("\n=== TESTE: Adicionar na posição ===")
lista.adicionarNaPosicao(2, 15)
lista.exibirInicioFim() 

console.log("\n=== TESTE: Exibir do fim para o início ===")
lista.exibirFimInicio() 

console.log("\n=== TESTE: Existe ===")
console.log(lista.existe(15)) 
console.log(lista.existe(99)) 

console.log("\n=== TESTE: Remover início ===")
console.log(lista.removerInicio()) 
lista.exibirInicioFim() 

console.log("\n=== TESTE: Remover final ===")
console.log(lista.removerFinal()) 
lista.exibirInicioFim() 

console.log("\n=== TESTE: Remover na posição ===")
console.log(lista.removerNaPosicao(1)) 
lista.exibirInicioFim() 

console.log("\n=== TESTE: Estado final ===")
lista.exibirInicioFim() 
console.log("Tamanho:", lista.obterTamanho())
console.log("Vazia?", lista.estaVazia())

console.log("\n=== TESTE: Remover tudo ===")
lista.removerInicio()
lista.removerInicio()
console.log("Vazia?", lista.estaVazia())
console.log("Remover de lista vazia:", lista.removerFinal()) 
