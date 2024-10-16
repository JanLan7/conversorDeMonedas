//Conversor de monedas

alert("Que moneda desea convertir?:\n 1. Guaranies a Dolares\n 2. Dolares a Guaranies");

numero = prompt()

if (numero == 1){
    guaranies_a_dolares = Number(prompt("Ingrese el monto: "))
    conversion = guaranies_a_dolares * 0.00013
    alert("El monto es de: " + conversion.toFixed(2) + "$.")
    
} else if (numero == 2){
    dolares_a_guaranies = Number(prompt("Ingrese el monto: "))
    conversion = dolares_a_guaranies * 7833
    alert("El monto es de: " + conversion + " Gs.")
} else{
    alert("Opción no valida")
}

alert("Eso es todo amigos! 😁")