// realizar un ejemplos distinto al de la página, usando los condicionales en JavaScript.

//----------------------------------------------------------------------
// Ejemplo de operador ternario: Verificar si una persona es mayor de edad o no.
const edad = 15;
const esMayorDeEdad = edad >= 18 ? "Mayor de edad" : "Menor de edad";

console.log(esMayorDeEdad);  // Imprimirá "Menor de edad"

//----------------------------------------------------------------------
// Ejemplo de operador lógico &&: Verificar si un usuario tiene un nombre y edad válidos.
const usuario = {
    nombre: "Stiven",
    edad: 24
  };
  
  if (usuario.nombre && usuario.edad > 0) {
    console.log("Bienvenido,", usuario.nombre);
  } else {
    console.log("Usuario no válido");
  }

//----------------------------------------------------------------------
// Ejemplo de switch statement: Mostrar un mensaje basado en el día de la semana.
const diaDeLaSemana = "Miércoles";

switch (diaDeLaSemana) {
  case "Lunes":
    console.log("Es el primer día de la semana.");
    break;
    case "Martes":
    console.log("Es el Segundo día de la semana.");
    break;
  case "Miércoles":
    console.log("Mitad de semana, ¡ánimo!");
    break;
    case "Jueves":
    console.log("Es el Cuarto día de la semana.");
    break;
  case "Viernes":
    console.log("El fin de semana está cerca.");
    break;
    case "Sabado":
    console.log("Es el primer día del fin de semana");
    break;
    case "Domingo":
    console.log("Es el utimo dia del fin de semana.");
    break;
  default:
    console.log("Es un día cualquiera.");
}
//----------------------------------------------------------------------
// Ejemplo de if statement: Verificar si un número es par.
const numero = 24;

if (numero % 2 === 0) {
  console.log(`${numero} es un número par.`);
} else {
  console.log(`${numero} no es un número par.`);
}
//----------------------------------------------------------------------
// Ejemplo de else if clause: Clasificar una puntuación en una evaluación.
const puntuacion = 75;

if (puntuacion >= 90) {
  console.log("Excelente");
} else if (puntuacion >= 80) {
  console.log("Bueno");
} else if (puntuacion >= 70) {
  console.log("Regular");
} else {
  console.log("Necesitas mejorar");
}
//----------------------------------------------------------------------