/*
const nome = prompt("Qual o seu nome?")
const cor = prompt ("Qual a sua cor favorita?")

const fraseCorFavorita = "A cor favorita da " +nome+ " é "+ cor

console.log(fraseCorFavorita)
console.log("A cor favorita da " +nome+ " é " +cor)

const fraseTemplateString = ` A cor favorita da ${nome} é ${cor}`
console.log(fraseCorFavorita)

//--------------------------

const citacao = prompt("Escreva uma citação")
const fraseComCitacao = "A cor favorita da " +nome+ " é " +
cor+" \"" + citacao + "\""

console.log(fraseComCitacao);

console.log(`Nome: ${nome} \nCor favorita: ${cor}`)

//----------------------------

console.log(`Nome: ${nome.toUpperCase()} \nCor favorita: ${cor}`)

console.log(nome.length)

const possuiA = nome.includes("a")
console.log(possuiA)
*/

emailDoUsuario=prompt("Qual o seu email?")
nomeDoUsuario=prompt("Qual o seu nome?")
console.log(`O email ${emailDoUsuario} foi cadastrado com sucesso.
Bem vindo ${nomeDoUsuario}`);
console.log(nomeDoUsuario.lenght);

const arroba=emailDoUsuario.includes("@")
console.log(arroba);
console.log(nomeDoUsuario.replaceAll("o","e"));



