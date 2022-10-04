//Os pares de instruções abaixo produzem o mesmo resultado?

let a = (4/2) + (2/4);
let b = 4/(2+2)/4;
let c = (4+2)*2-4;
let aD = 4/2+2/4;
let bD = 4/2+2/4;
let cD = 4+2*2-4;

console.log((a == aD));
console.log((b == bD));
console.log((c == cD));