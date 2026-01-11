# Lista Duplamente Encadeada em TypeScript

## Integrantes
- Mateus Araujo  

---

## Descrição

Este projeto implementa o Tipo de Dado Abstrato (TDA) **Lista Duplamente Encadeada** utilizando a linguagem **TypeScript**, sem o uso de estruturas prontas como `Array` ou bibliotecas externas.

A lista permite:
- Percorrer os elementos do início para o fim
- Percorrer os elementos do fim para o início
- Inserir, remover e buscar elementos em qualquer posição

A estrutura é formada por nós (`Elemento`), onde cada nó armazena um valor e duas referências:
- `proximo`: referência para o próximo elemento
- `anterior`: referência para o elemento anterior

---

## Estrutura Principal

A classe principal é `ListaDuplamenteEncadeada`, responsável por controlar:
- O primeiro elemento (`inicio`)
- O último elemento (`fim`)
- O tamanho da lista (`tamanho`)

Ela implementa os seguintes métodos:

- `adicionarNoInicio(valor)`
- `adicionarNoFinal(valor)`
- `adicionarNaPosicao(pos, valor)`
- `removerInicio()`
- `removerFinal()`
- `removerNaPosicao(pos)`
- `existe(valor)`
- `estaVazia()`
- `obterTamanho()`
- `exibirInicioFim()`
- `exibirFimInicio()`

---

## Testes

O arquivo `teste.ts` contém uma bateria de testes que valida todos os métodos da lista, incluindo:
- Inserção no início, final e posição
- Remoção no início, final e posição
- Busca de elementos
- Percurso da lista nos dois sentidos
- Testes de lista vazia

Os resultados são exibidos no console.

---

## Requisitos

Para executar o projeto é necessário ter:

- **Node.js** instalado  
- **TypeScript** instalado  

Verifique com:

```bash
node -v
tsc -v
```	

## Como executar

Primeiro, clone o repositório:
```bash
git clone https://github.com/mateusaraujo03/FIla-Duplamente-Encadeada.git
```

Depois, entre na pasta do projeto:
```bash
cd FIla-Duplamente-Encadeada
```

Depois, no terminal execute:
```bash
npx tsc 
node .\dist\teste.js
```
