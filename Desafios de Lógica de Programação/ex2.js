// Analise os algoritmos abaixo e diga o que será impresso na tela ao serem executados: 

//a)
let a = 10;
let b = 20;
console.log(`O valor de b é ${b}`);
b = 5;
console.log(`Algo mudou! o valor de a é ${a} e o valor de b é ${b}`);

//b)
a = 30;
b = 20;
let c = a + b;
console.log(c);
b = 10;
console.log(b, c);
c = a = b;
console.log(a, b, c);

//c)
a = 10;
b = 20;
c = a;
b = c;
a = b;
console.log(a, b, c);

//d)
a = 10;
b = a + 1;
a = b + 1;
b = a + 1;
console.log(a);
a = b + 1;
console.log(a, b);

//e)
a = 10;
b = 5;
c = a + b;
b = 20;
a = 10; 
console.log(a, b, c);

//f)
let x = 1;
let y = 2;
let z = y - x;
console.log(z);
x = 5;
y = x + z;
console.log(x,y,z);