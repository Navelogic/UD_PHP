let mediaUm, mediaDois, mediaTres, mediaQuatro, aluno, soma, mediaTotal, situacao, mediaEmergente;

aluno = prompt("Passe o nome do Aluno");
mediaUm = parseFloat(prompt(`Qual foi a nota de ${aluno} no PRIMEIRO semestre?`));
mediaDois = parseFloat(prompt(`Qual foi a nota de ${aluno} no SEGUNDO semestre?`));
mediaTres = parseFloat(prompt(`Qual foi a nota de ${aluno} no TERCEIRO semestre?`));
mediaQuatro = parseFloat(prompt(`Qual foi a nota de ${aluno} no QUARTO semestre?`));

soma = (mediaUm + mediaDois + mediaTres + mediaQuatro);
mediaTotal = soma/4;
situacao = "Apovado"

if(mediaTotal >= 9){
  document.write(`${aluno} está APROVADO! Sua média é ${mediaTotal}! Você tirou um A`);
} else if(mediaTotal >= 7){
  document.write(`${aluno} está APROVADO! Sua média é ${mediaTotal}! Você tirou um B`);
} else if(mediaTotal >= 6){
  document.write(`${aluno} está APROVADO! Sua média é ${mediaTotal}! Você tirou um C`);
} else if(mediaTotal >= 4){
  document.write(`${aluno} está REPROVADO! Sua média é ${mediaTotal}! Você tirou um D`);
  situacao = "Reprovado";
} else{
  document.write(`${aluno} está REPROVADO! Sua média é ${mediaTotal}! Você tirou um E`);  
  situacao = "Reprovado";
};

if(situacao == "Reprovado"){
  mediaEmergente = parseFloat(prompt(`${aluno} foi reprovado, por favor passe mais uma nota.`));
  soma = (mediaUm + mediaDois + mediaTres + mediaQuatro + mediaEmergente);
  mediaTotal = soma/5;
};