'use strict'

alert("Hola, bienvenid@ a la calculadora.")

let repetir = true;
let numeros;

while (repetir) {

    let operacion = prompt("¿Que operación quieres realizar? ( '+', '-', '*' o '/' )");
    operacion = operacion.trim();

    while (operacion !== '+' && operacion !== '-' && operacion !== '*' && operacion !== '/') {
        alert(" \" " + operacion + " \" " + " No es un operando válido.")
        operacion = prompt("¿Que operación quieres realizar? ( '+', '-', '*' o '/' )");
        operacion = operacion.trim();
    }

    let num1 = null;
    let num2 = null;
    let sonNumeros = false;

    do {
        num1 = null;
        num2 = null;
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

    } while (!sonNumeros);

    let resultado = 0;
    switch (operacion) {
        case '+':
            resultado = Number(num1) + Number(num2);
            break;

        case '-':
            resultado = Number(num1) - Number(num2);
            break;

        case '*':
            resultado = Number(num1) * Number(num2);
            break;

        case '/':
            resultado = Number(num1) / Number(num2);
            break;

    }
    alert(resultado);

    repetir = confirm("¿Quieres realizar otra operación?");
}
