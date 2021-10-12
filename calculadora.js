'use strict'

alert("Hola, bienvenid@ a la calculadora.")

let repetir = true;
let nums = false;
let op;
let operacion;
let numeros;
let operandos;
let num1 = null;
let num2 = null;

function pedirValidarOperando() {
    op = prompt("¿Que operación quieres realizar? ( '+', '-', '*' o '/' )");
    op = op.trim();

    while (op !== '+' && op !== '-' && op !== '*' && op !== '/') {
        alert(" \" " + op + " \" " + " No es un operando válido.")
        op = prompt("¿Que operación quieres realizar? ( '+', '-', '*' o '/' )");
        op = op.trim();
    }
}

function pedirValidarNumeros () {

    num1 = null;
    num2 = null;

    while (!nums) {

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
    return numeros;
}

while (repetir) {

    pedirValidarOperando();
    operandos = pedirValidarNumeros();

    let calculadora = {

        num1: '',
        num2: '',
        operacion: '',

        sum() {
            lastResult = (Number(this.num1) + Number(this.num1));
            alert(lastResult);
        },
        
        res() {
            lastResult = (Number(this.num1) - Number(this.num1));
            alert(lastResult);
        },

        mul() {
            lastResult = (Number(this.num1) * Number(this.num1));
            alert(lastResult);
        },

        div() {
            lastResult = (Number(this.num1) / Number(this.num1));
            alert(lastResult);
        },
    }


    switch (op) {
        case '+':
            calculadora.sum();
            lastResult = sum;
            break;

        case '-':
            calculadora.res();
            lastResult = res;
            break;

        case '*':
            calculadora.mul();
            break;

        case '/':
            calculadora.div();
            break;

    }



    repetir = confirm("¿Quieres realizar otra operación?");
}
