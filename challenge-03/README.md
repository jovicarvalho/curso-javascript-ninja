# Desafio da semana #3

```js
// Declarar uma variável qualquer, que receba um objeto vazio.
var qualquer

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
const personagem = {
  nome:"",
  sobrenome:"",
  sexo:"",
  idade:0,
  altura:0,
  peso:0,
  andando:false,
  caminhouQuantosMetros:0
}

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
personagem.fazerAniversario = () => {
    ++personagem.idade 
    return "Parabens você faz aniversário e aumentou sua idade"
}

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
personagem.andar = (metros) =>{
  if (Number.isNaN(metros))){
    return "Você deve digitar um número válido";
  } 
  personagem.andando = true
  personagem.caminhouQuantosMetros = personagem.caminhouQuantosMetros + metros;
  return "O personagem deu alguns passos";
}

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
personagem.parar = () => {personagem.andando = false}

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
personagem.nomeCompleto = () => `Olá! Meu nome é ${personagem.nome} ${personagem.sobrenome}`

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
personagem.mostrarIdade = () => `Olá, eu tenho ${personagem.idade} anos`

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
personagem.mostrarPeso = () => `Eu peso ${porsonagem.peso}Kg.`

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
personagem.mostrarAltura = () => `Minha altura é ${personagem.altura}`

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
personagem.nomeCompleto()

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
personagem.mostrarIdade()

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
personagem.mostrarPeso()

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
personagem.mostrarAltura()

/*
Faça a `pessoa` fazer 3 aniversários.
*/
personagem.fazerAniversario()
personagem.fazerAniversario()
personagem.fazerAniversario()

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
3 

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
personagem.andou(10)

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
personagem.andando

/*
Se a pessoa ainda está andando, faça-a parar.
*/
personagem.parou() 

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
personagem.andando

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
10


/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/
?

// Agora, apresente-se ;)
personagem.apresentacao = () =>{
  let idade
  let pronome
  let metragem

  personagem.sexo == "Feminino" ? pronome = "a" : pronome = "o"
  personagem.idade > 1 ? idade = "anos" : idadae = "ano"
  personagem.caminhouQuantosMetros > 1 ? metragem = "metros" : metragem = "metro"
  return `Olá, eu sou ${pronome} ${personagem.nome} ${personagem.sobrenome} , tenho ${personagem.idade} ${idade}, ${personagem.altura} de altura, meu peso é ${personagem.peso} e, só hoje, eu já caminhei ${personagem.caminhouQuantosMetros}  ${metragem}!`
}
```
