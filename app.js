"use strict";

/* 
Função para gerar inteiros aleatórios dado um range Min e Max;
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
        quantidade: gerarRandomInt(0,9999), 
        precoUnitario: gerarRandomInt(0,999999)
      };
      
      conjuntoItens.add(item)
  }
  return Array.from(conjuntoItens);
}

/*
Conforme regra de negócio, o email é UNIQUE.
Decidi por utilizar o SET, pois o Set permite apenas uma ocorrência para o mesmo valor informado;
A função retorna um Array a partir do Set de emails.
------
A função retorna emails com tamanho padrão da RFC5321, ou seja, email de tamanho máximo 255 caracteres, 
sendo 64 caracteres máximos no nome e 191 caracteres máximos no domínio.
A função retorna pelo menos um caractere no nome e pelo menos 1 caractere na parte do domínio.
*/
function gerarEmails(tamanhoLista){
  let qntCharNome;
  let qntCharDominio;
  let conjuntoEmails = new Set();
  
  for(let i=0; i<tamanhoLista;i++){
    qntCharNome = gerarRandomInt(1,64);
    qntCharDominio = gerarRandomInt(1,191);
    conjuntoEmails.add(stringAleatoria(qntCharNome)+"@"+stringAleatoria(qntCharDominio));
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

/*  CONCLUIR ESSA FUNÇÃO */
function distribuiValorRestante(lista, valorParaDistribuir){
 
  let contador = 0;
 
  for(let i=0; i<lista.length; i++){
    if(valorParaDistribuir<=0){break;}
    
    lista[i].valor = lista[i].valor + 1;
    valorParaDistribuir--;
  }

  return lista;
};


function calcula(itens, emails){
  
  let resultado = new Array();
  
  let valorItens = valorTotalItens(itens);
  let quantidadeEmails = emails.length;
  let valorMinimo = 0;
  let restante = 0;
  
  if(quantidadeEmails<1){
    console.log("A lista de Emails não possui pessoas cadastradas.")
  }else{
    valorMinimo = Math.floor(valorItens/quantidadeEmails);
    restante = valorItens-(valorMinimo*quantidadeEmails);

    emails.forEach(email=>{
      resultado.push({pessoa : email, valor: valorMinimo});
    });
    
    if(restante>0){
      resultado = distribuiValorRestante(resultado, restante);
    }
  }
  
  
  console.log(`Valor total dos Itens (em centavos de R$): ${valorItens}`);
  console.log(`Quantidade de Pessoas: ${emails.length}`);
  console.log(`Valor para Mínimo para cada usuário ${valorMinimo}`);
  console.log(`Valor restante, após divisão mínima, é ${restante}`);
  
  return resultado;
  
}
/*==================== MAIN ========================*/

const QUANTIDADE_EMAILS = gerarRandomInt(0,9999);
const QUANTIDADE_ITENS = gerarRandomInt(0,99999);

let itens = gerarItens(QUANTIDADE_ITENS);
let emails = gerarEmails(QUANTIDADE_EMAILS);

let mapaFinal = calcula(itens, emails);
console.table(mapaFinal);