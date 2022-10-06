let identificacao, codigo, preco, quantidade, porcentagem;

identificacao = "Atacadão";
codigo = 123456789;
preco = 50;
quantidade = 2680;

totalDeVendas = preco * quantidade;
porcentagem = 0.5/100 * totalDeVendas;

document.write(`A sua comição é de R$${parseFloat(porcentagem)+".00"}`);