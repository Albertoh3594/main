'use strict'

let repetir = true;
let op;
let num1 = '';
let num2 = '';

class Calculadora {

    lastResult = 0;


    sum(n1, n2) {
        this.lastResult = n1 + n2;
        alert("El resultado de la suma es: " + this.lastResult);
    };

    res(n1, n2) {
        this.lastResult = n1 - n2;
        alert("El resultado de la resta es: " + this.lastResult);
    };

    mul(n1, n2) {
        this.lastResult = n1 * n2;
        alert("El resultado de la multiplicación es: " + this.lastResult);
    };

    div(n1, n2) {
        this.lastResult = n1 / n2;
        alert("El resultado de la division es: " + this.lastResult);
    };
}

class ErrorOper extends Error {
    constructor(message) {
        super(message);
        this.name = "ErrorOper";
    }
}
class ErrorNums extends Error {
    constructor(message) {
        super(message);
        this.name = "ErrorNums";
    }
}

let calculadora = new Calculadora;

function pedirValidarOperacion() {

    try {
        do {
            op = prompt("¿Que operación quieres realizar? ( '+', '-', '*' o '/' )");
            op = op.trim();

            if (op !== '+' && op !== '-' && op !== '*' && op !== '/') {
                throw new ErrorOper(" \" " + op + " \" " + " No es un operando válido.");
            }
        } while (op !== '+' && op !== '-' && op !== '*' && op !== '/');

    } catch (error) {
        if (error.name === "ErrorOper") {
            alert(error.message);
            pedirValidarOperacion();
        }
    }
}

let pedirValidarNumeros = function() {
    try {
        num1 = '';
        num2 = '';
        let salir = false;

        while (!salir) {
            let operadores = prompt('Introduce los operadores separados por espacio', '');

            let i = 0;
            for (; i < operadores.length; i++) {
                if (operadores[i] === 'R' || operadores[i] === 'r') {
                    num1 = calculadora.lastResult;
                    break;
                }
                if (operadores[i] !== ' ') {
                    num1 = operadores[i];
                } else {
                    if (num1 !== '') {
                        break;
                    }
                }
            }
            i++;

            for (; i < operadores.length; i++) {
                if (operadores[i] === 'R' || operadores[i] === 'r') {
                    num2 = calculadora.lastResult;
                    break;
                }
                if (operadores[i] !== ' ') {
                    num2 = operadores[i];
                } else {
                    if (num2 !== '') {
                        break;
                    }
                }
            }

            num1 = Number(num1);
            num2 = Number(num2);

            if (isNaN(num1) || isNaN(num2)) {
                salir = false;
                throw new ErrorNums('Tienes que introducir números');
            } else {
                salir = true;
            }
        }
    } catch (error) {
        if (error.name === "ErrorNums") {
            alert(error.message);
            pedirValidarNumeros();
        }
    }
}

alert("Hola, bienvenid@ a la calculadora.")

while (repetir) {

    pedirValidarOperacion();
    pedirValidarNumeros();

    switch (op) {
        case '+':
            calculadora.sum(num1, num2);
            break;

        case '-':
            calculadora.res(num1, num2);
            break;

        case '*':
            calculadora.mul(num1, num2);
            break;

        case '/':
            calculadora.div(num1, num2);
            break;

    }

    repetir = confirm("¿Quieres realizar otra operación?");
}