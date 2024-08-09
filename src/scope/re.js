
//Aqui se puede observar como podemos redeclarar las variables...

//Aqui es un ejemplo que podemos declarar y luego podemos asignarle un valor 
//a la variable
var firstName;
firstName = `Ariel`;
console.log(firstName);

//De la misma forma se puede declarar y asignar un valor a la vez
var lastName = `Martinez`;
lastName = `Llanes`;
console.log(lastName);

//Este es un ejercicio bastante simple donde usamos la misma variable pero lo declaramos y
//asignamos un valor para luego usar un "console.log". 

//Aqui podemos de la misma manera redeclarar y observar su funcionamiento
var segundoNombre = `Jose`;
console.log(segundoNombre);
var segundoNombre = `Ramirez`;
console.log(segundoNombre);

//El resultado de este ejercicio cuando ejecutamos "nano [Nombre del Archivo]" da como resultado:

//Jose
//Ramirez

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Vamos a usar "let"
//Con let podemos hacer lo mismo como declarar y reasiganar el valor de la variable
let pelicula = `Maxxxin`;
pelicula = `Perl`;
console.log(pelicula);

//Pero "Let" no permite el redeclar un valor, por ejemplo:
    //let pelicula = `Madagascar`;
    //console.log(pelicula);|


/////////////////////////////////////////////////////////////////////////////////////////////////////

//Vamos a usar "const". Ahora "const" no permite reasignar un valor ni ser redeclarado.
//En este sentido solo lo permite hacer una vez.

const cosas = `Borrador`;
//cosas = `Tajador`;
console.log(cosas);

//const cosas = `Audifonos`;


const Marcas = [];
Marcas.push(`Audi`);
Marcas.push(`BMW`);
console.log(Marcas);

Marcas.pop();
console.log(Marcas);
