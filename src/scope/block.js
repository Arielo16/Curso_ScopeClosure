
// Las variables `let`, `const` son variables de bloque o BlockScope, 
//y se refiere a que solo lo puedes utilizar 
//en el mismo bloque donde estas declarandolo.

function consolas() {
    if (true) {
        var Consola1 = `Nintendo`;
        let Consola2 = `Xbox`;
        const Consola3 = `PlayStation`;

    //Por ejemplo aqui si funcionaria "Console.log()" junto a las variables `let y `const`
    //Por que se encuentran declarados en el mismo bloque, en este caso el bloque "if"

        //console.log(Consola2);
        //console.log(Consola3);
    }

//En este sentido "Console.log()" solo funcionaria la variable `var` 
//por que es una variable de funcion o una FunctionScope.
//En este caso la funcion es "consolas()".

    console.log(Consola1);
    console.log(Consola2);
    console.log(Consola3);
    

}

consolas();
