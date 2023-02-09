function greet(){
    console.log("Hello");
}
greet();

function logGreeting(fn){
    fn();
}
logGreeting(greet);

let greetMe = function(){
    console.log("Hello from the function expression");
}
greetMe();

let saludo = (nombre, tratamiento) => {
    console.log('Hola ' + tratamiento + ' ' + nombre);
}
saludo('Miguel', 'Sr.');

let cuadrado = numero => {
    return numero*numero;
}
/*
let cuadrado = numero => numero*numero;
*/
console.log(cuadrado(2));