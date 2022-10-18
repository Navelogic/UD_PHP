function cadastroDeAluno(){
  let alunos = [];
  let quantidadeAlunos = parseInt(prompt("Quantos Alunos serão adicionados?"));

  for (let i = 0; i < quantidadeAlunos; i++) {
    let nome = prompt("Digite o nome do aluno");
    let idade = parseInt(prompt("Digite a idade"));
    let matricula = parseInt(prompt("Digite a matricula"));
    let curso = prompt("Digite o curso");
    let media = parseFloat(prompt("Digite o media"));
    let status_media = prompt("Digite o status de media");
    let status_mensalidade = prompt("Digite o status de mensalidade");

    let aluno = {
      'nome': nome || "Indefinido", // Nome do Aluno
      'idade': idade || 0, // Idade do Aluno
      'matricula': matricula || 0, // Num Matricula
      'curso': curso || "Padrão", // Nome do Curso
      'media': media || 0, // Valor quebrado
      'status_media': status_media || "Padrão", // Aprovado || Reprovado
      'status_mensalidade': status_mensalidade || "Padrão" // Atrasado || Pago
    };
    alunos.push(aluno);
  }
  return alunos;
};


let arrayDeAlunos = [];

arrayDeAlunos = cadastroDeAluno();
console.log(arrayDeAlunos);

