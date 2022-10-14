let nome = "Arian";
let nomeReal = nome.toLowerCase();

for(i = 0; i < nomeReal.length; i++){
  if(nomeReal[i] == "a"){
    console.log(`Achei um a no nome: ${nome}. O ind é: ${i} `);
  }
};
