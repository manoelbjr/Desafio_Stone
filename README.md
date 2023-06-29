## Formação em Elixir Stone Pagamentos | Desafio Técnico

### Requisitos

Para executar a aplicação é necessário utilizar o NodeJs:

```
node app.js
```

### Descrição

Trecho Principal (a partir da linha 127):
```javascript
const QUANTIDADE_EMAILS = gerarRandomInt(min,max);
const QUANTIDADE_ITENS = gerarRandomInt(min,max);

let itens = gerarItens(QUANTIDADE_ITENS);
let emails = gerarEmails(QUANTIDADE_EMAILS);

let mapaFinal = calcula(itens, emails);
console.table(mapaFinal);
```
Informe os limites mínimo e máximo na função ``gerarRadomInt()`` para gerar uma quantidade de emails e quantidade de itens de forma aleatória.

As funções ``gerarItens()`` e ``gerarEmails()`` retornam listas de itens e emails, respectivamente.

A função ``calcula()`` recebe as duas listas, distribui o valor total dos produtos seguindo a regra de negócio definida no desafio, retornando um mapa chave->valor com o Email e Valor que cada pessoa irá pagar.

Caso a lista de emails seja vazia, a aplicação informa que a lista não possui pessoas cadastradas.

Caso a lista de produtos é vazia, cada pessoa da lista de emails pagará o valor '0'.

### Detalhe

A função principal, ``calcula(itens, emails)``, calcula o valor total dos itens, divide o valor total dos itens pela quantidade de emails cadastrados. Como essa divisão naturalmente resultará um número de ponto flutuante, utilizamos a função Piso ``Math.floor(x)``  que retorna o menor número inteiro dentre o número "x".

Esse é, então, o valor mínimo que cada pessoa irá pagar. A aplicação então atribui o valor mínimo para todos os emails. Caso haja resto inteiro da divisão, o programa soma 1 centavo para cada pessoa até que não sobre mais resto.

**Nota**

As linhas 118 até 121 estão comentadas e podem ser utilizadas pelo avaliador técnico para conferir se os resultados estão coincidindo com a saída da aplicação:

```javascript
  // console.log(`Valor total dos Itens (em centavos de R$): ${valorItens}`);
  // console.log(`Quantidade de Pessoas: ${emails.length}`);
  // console.log(`Valor para Mínimo para cada usuário ${valorMinimo}`);
  // console.log(`Valor restante, após divisão mínima, é ${restante}`);
```

