'use strict'

alert("Hola, bienvenid@ a la calculadora.")

let repetir = true;
let numeros;
let op;

function pedirValorarOperando(op)
{
    op = prompt("¿Que operación quieres realizar? ( '+', '-', '*' o '/' )");
    op = op.trim();

    while (op !== '+' && op !== '-' && op !== '*' && op !== '/') {
        alert(" \" " + op + " \" " + " No es un operando válido.")
        op = prompt("¿Que operación quieres realizar? ( '+', '-', '*' o '/' )");
        op = op.trim();
    }
    return op;
}

while (repetir) {

    op = pedirValorarOperando(op);

    let num1 = null;
    let num2 = null;
    let sonNumeros = false;

    do {
        num1 = null;
        num2 = null;
        sonNumeros = false;
        let nums = function(sonNumeros)
        {
        numeros = prompt("Introduzca 2 numeros separados por un espacio");
        numeros = numeros.split(" ");
        for (let i = 0; i < numeros.length; i++) {
           
            if (numeros[i] !== '') {
                if(num1 == null)
                {
                    num1 = numeros[i];
                }else 
                {
                    num2 = numeros[i];
                }
            } 
        }
        if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
            if (num1==null || num2==null) {
                sonNumeros=false;
            }else{
                num1=Number(num1);
                num2=Number(num2);
                sonNumeros=true;
            }
        }else{
            num1=null;
            num2=null;
            alert("Introduce numeros")
            sonNumeros=false;
        }
        return sonNumeros;
        }
    } while (!nums);

    let sum = (num1, num2) => num1 + num2;
    let res = (num1, num2) => num1 - num2;
    let mul = (num1, num2) => num1 * num2;
    let div = (num1, num2) => num1 / num2;
    
    switch (op) {
        case '+':
            alert(sum ( num1, num2) );
            break;

        case '-':
            alert(res ( num1, num2) );
            break;

        case '*':
            alert(mul ( num1, num2) );
            break;

        case '/':
            alert(div ( num1, num2) );
            break;

    }
    

    repetir = confirm("¿Quieres realizar otra operación?");
}
