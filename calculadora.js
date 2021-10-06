'use strict'

alert("Hola, bienvenid@ a la calculadora.")

let repetir = true;
let numeros;
let op;
let num1 = null;
let num2 = null;

function pedirValorarOperando() {
    op = prompt("¿Que operación quieres realizar? ( '+', '-', '*' o '/' )");
    op = op.trim();

    while (op !== '+' && op !== '-' && op !== '*' && op !== '/') {
        alert(" \" " + op + " \" " + " No es un operando válido.")
        op = prompt("¿Que operación quieres realizar? ( '+', '-', '*' o '/' )");
        op = op.trim();
    }
}

function pedirValorarNumeros() {
    
    num1 = null;
    num2 = null;
    numeros = prompt("Introduzca 2 numeros separados por un espacio");
    numeros = numeros.split(" ");
    for (let i = 0; i < numeros.length; i++) {

        if (numeros[i] !== '') {
            if (num1 == null) {
                num1 = numeros[i];
            } else {
                num2 = numeros[i];
            }
        }
    }
    if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
        if (num1 == null || num2 == null) {
            return false;
        } else {
            num1 = Number(num1);
            num2 = Number(num2);
            return true;
        }
    } else {
        num1 = null;
        num2 = null;
        alert("Introduce numeros");
        return false;
    }
}

while (repetir) {

    pedirValorarOperando();
    let nums = pedirValorarNumeros();

    while(!nums) {
        nums = pedirValorarNumeros();
    }

    switch (op) {
        case '+':
            let sum = (num1, num2) => num1 + num2;
            alert(sum(num1, num2));
            break;

        case '-':
            let res = (num1, num2) => num1 - num2;
            alert(res(num1, num2));
            break;

        case '*':
            let mul = (num1, num2) => num1 * num2;
            alert(mul(num1, num2));
            break;

        case '/':
            let div = (num1, num2) => num1 / num2;
            alert(div(num1, num2));
            break;

    }


    repetir = confirm("¿Quieres realizar otra operación?");
}
