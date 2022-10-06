let cotacaoDolar, valorEmDolar, valorEmReal;

cotacaoDolar = 5.18;
valorEmDolar = parseFloat(prompt("Passe o valor em dólar"));
valorEmReal = valorEmDolar * cotacaoDolar;
document.write(`O valor em reais é ${valorEmReal}`);