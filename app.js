"use strict";

const QUANTIDADE_EMAILS = gerarRandomInt(0,1000);
const QUANTIDADE_ITENS = gerarRandomInt(0,1000);

/* 
Função para gerar inteiros aleatórios dado um range Max e Min;
*/
function gerarRandomInt(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max-min)) + min;
}

/*
Gera uma string aleatória, dado tamanho;
*/
function stringAleatoria(tamanho) {
  let conjuntoCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let stringAleatoria = '';
  for (let i = 0; i < tamanho; i++) {
      let randomPoz = Math.floor(Math.random() * conjuntoCaracteres.length);
      stringAleatoria += conjuntoCaracteres.substring(randomPoz,randomPoz+1);
  }
  return stringAleatoria;
}

/*
Gera uma lista de itens, dado tamanho
*/
function gerarItens(tamanhoLista){
  let conjuntoItens = new Set();
 
  for(let i=0; i<tamanhoLista;i++){

      let item = {
        nome: stringAleatoria(5), 
        quantidade: gerarRandomInt(0,3000), 
        precoUnitario: gerarRandomInt(0,300000)
      };
      
      conjuntoItens.add(item)
  }

  return Array.from(conjuntoItens);
}

/*
Conforme regra de negócio, o email é UNIQUE.
Decidi por utilizar o SET, pois o Set permite apenas uma ocorrência para o mesmo valor informado;
A função retorna um Array a partir do Set de emails.

https://tools.ietf.org/html/rfc5321
*/
function gerarEmails(tamanhoLista){
  let qntCharNome;
  let conjuntoEmails = new Set();
  for(let i=0; i<tamanhoLista;i++){
    qntCharNome = gerarRandomInt(1,64);
    conjuntoEmails.add(stringAleatoria(qntCharNome)+`@`+stringAleatoria(qntCharNome));
  }
  
  return Array.from(conjuntoEmails);
};

/*
Recebe um array de Itens e retorna o valor total da lista (preçoUnitário do Item * quantidade)
*/
function valorTotalItens(itens){
  let total = 0;
  itens.forEach(item => {
    total = item.quantidade * item.precoUnitario;
  });
  return total;
}

/*==================== MAIN ========================*/
let itens = gerarItens(QUANTIDADE_ITENS);
let emails = gerarEmails(QUANTIDADE_EMAILS);


function calcula(itens, emails){
  
  let resultado = new Map();
  let pessoa = "";
  let valor = 0; 

  let valorItens = valorTotalItens(itens);
  let quantidadeEmails = emails.length;

  console.log(`O valor total dos Itens ${valorItens}`);
  console.log(`A quantidade de Emails ${emails.length}`);
  console.log(`Valor para cada usuário ${Math.floor(valorItens/quantidadeEmails)}`)

  /*
    passo 1: valor INICIAL pra cada email = Math.floor(valorItens/quantidadeEmails)
    passo 2: calcula o que sobrou do valor total (resto inteiro da divisão)
    passo 3: entrega +1 centavo pra cada email até que o resto seja zero
  */
  return resultado;

}
calcula(itens, emails);

// console.log(gerarItens(QUANTIDADE_ITENS));
// console.log(gerarEmails(QUANTIDADE_EMAILS));