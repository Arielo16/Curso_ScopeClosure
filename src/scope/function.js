function NombreUsuario() {
    let UserName = "Ariel";
    console.log(UserName);

    if (UserName === "Ariel") {
        console.log(`Hola ${UserName}`);
    }
}

//NO se puede acceder e una variable si se declaro dentro de la función.
//console.log(UserName);

//En este caso la variable solo puedo utilizarla dentro de la funcion, donde fue declarado.

NombreUsuario();