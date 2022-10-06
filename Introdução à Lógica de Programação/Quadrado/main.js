let num1, num2, num3, num4;

num1 = parseFloat(prompt("Passe o primeiro valor"));
num2 = parseFloat(prompt("Passe o segundo valor"));
num3 = parseFloat(prompt("Passe o terceiro valor"));
num4 = parseFloat(prompt("Passe o quarto valor"));
completo = ((Math.pow(num1,2)) + (Math.pow(num2,2)) + (Math.pow(num3,2)) + (Math.pow(num4,2)));
document.write(`O resultado é ${completo}`);