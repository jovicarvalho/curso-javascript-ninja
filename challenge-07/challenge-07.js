/*
Crie um array com 5 items (tipos variados).
*/
var ar = [0,"olá",undefined,"Vasco", "tchau"]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(item,index){
  ar[index] = item;
  return ar;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/

addItem(newAr = ["Flamengo","Vasco",300], 7)

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log(ar[7][1])

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
var arLength = ar.length
console.log("O primeiro array tem "+ arLength + " itens".)

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O segundo array criado tem " + ar[7].length + " itens");

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
let num = 10
while(num < 20){
  console.log(num);
  num = num + 2;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
// ?
let num = 11
while(num < 19){
  console.log(num);
  num = num + 2;
}
/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for (var number = 100; number<=120; number = number+2){
  console.log(number);
}

console.log( 'Números ímpares entre 111 e 125:' );
// ?
