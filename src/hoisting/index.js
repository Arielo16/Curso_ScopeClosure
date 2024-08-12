
// En este sentido debemos ver que el valor de la variable ya este asignado antes de cualquier
// uso del "console.log()", de no ser asi el resultado aparecera como, no definido.

// var UserName;
// console.log(UserName);
// var UserName = "PalermoDeLaCruzEspinosaPazDomelipaPepeJairSalamandraDelJesusVillaReal";
// console.log(UserName);



var apellido;
var apellido = `Ramirez`;

function ApellidoDelUsuario() {
    console.log(`El apellido del usuario es ${apellido}`);
}

ApellidoDelUsuario();

// function ApellidoDelUsuario() {
    // console.log(`El apellido del usuario es ${apellido}`);
// }
// var apellido = `Ramirez`;