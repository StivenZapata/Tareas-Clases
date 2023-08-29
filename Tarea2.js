
// Crear un arreglo
const miArreglo = [1, 2, 3, 4, 5];

// Función flecha para manipular arreglos (push y pop)
const manipularArreglo = (arr, accion, elemento) => {
  if (accion === "push") {
    arr.push(elemento);
  } else if (accion === "pop") {
    arr.pop();
  }
};

// Función flecha que toma dos parámetros y no utiliza return
const imprimirSuma = (a, b) => {
  const suma = a + b;
  console.log(`La suma de ${a} y ${b} es: ${suma}`);
};

// Callback function utilizando las funciones anteriores
const callbackFunction = () => {
  manipularArreglo(miArreglo, "push", 6);
  imprimirSuma(10, 20);
};

// Ejecutar la callback function
callbackFunction();

// Mostrar el arreglo resultante después de las manipulaciones
console.log("Arreglo después de las manipulaciones:", miArreglo);
