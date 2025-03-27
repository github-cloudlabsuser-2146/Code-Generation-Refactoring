// Función principal de la calculadora
function calculadora() {
    let continuar = true;

    while (continuar) {
        // Solicitar al usuario los números y la operación
        const numero1 = parseFloat(prompt("Introduce el primer número:"));
        const numero2 = parseFloat(prompt("Introduce el segundo número:"));
        const operacion = prompt("Introduce la operación (+, -, *, /):");

        let resultado;

        // Realizar la operación según la entrada del usuario
        switch (operacion) {
            case "+":
                resultado = numero1 + numero2;
                break;
            case "-":
                resultado = numero1 - numero2;
                break;
            case "*":
                resultado = numero1 * numero2;
                break;
            case "/":
                if (numero2 !== 0) {
                    resultado = numero1 / numero2;
                } else {
                    alert("Error: División por cero no permitida.");
                    continue;
                }
                break;
            default:
                alert("Operación no válida. Inténtalo de nuevo.");
                continue;
        }

        // Mostrar el resultado
        alert(`El resultado de ${numero1} ${operacion} ${numero2} es: ${resultado}`);

        // Preguntar si el usuario quiere realizar otra operación
        continuar = confirm("¿Quieres realizar otra operación?");
    }

    alert("¡Gracias por usar la calculadora!");
}

// Llamar a la función de la calculadora
calculadora();