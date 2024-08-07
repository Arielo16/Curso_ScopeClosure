//Vamos a ver como funcionan las variables

// se puede solo declarar, ejemplo:
var a;
var b;

//Pero tambien se puede declarar y asignarle un valor a una variable, por ejemplo:
var c = "z";
var d = 5;

//Puedo reasignar un valor, por ejmplo:
z = "Fosfo";
console.log(z);

//y se puede redeclarar, por ejemplo:

var a = "zzz"; //Osea "a" tiene sueño XD

////////////////////////////////////////////////////////////////////////////

//Global Scope
//Las variables declaradas en el scope global, son accesibles desde cualquier parte del programa
var Comida = "Chilaquiles";

console.log(Comida);

function QueQuieresComer() {
    console.log(Comida);
}

QueQuieresComer();

// otra forma de poner una variable global es asignando dentro de una funcion, por ejemplo:

function Postre() {
    dulce = "Chocolate";
    console.log(dulce);
}

Postre();
console.log(dulce);