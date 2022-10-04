//Escreva um algoritmo para ler um valor (do teclado) e escrever (na tela) o seu antecessor;

let teste;
teste = parseFloat(prompt("Quem é você?"));
document.write(`O antecessor de ${teste} é ${teste - 1}`);