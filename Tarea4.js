// Definir la clase padre
class ClasePadre {
  constructor(objetoPropiedad) {
    this.objetoPropiedad = objetoPropiedad;
  }

  metodo1() {
    console.log("Este es el método 1 de la clase padre");
  }

  metodo2() {
    console.log("Este es el método 2 de la clase padre");
  }
}

// Definir la clase hija que hereda de la clase padre
class ClaseHija extends ClasePadre {
  constructor(objetoPropiedad, otroObjetoPropiedad) {
    super(objetoPropiedad);
    this.otroObjetoPropiedad = otroObjetoPropiedad;
  }

  metodo3() {
    console.log("Este es el método 3 de la clase hija");
  }

  metodo4() {
    console.log("Este es el método 4 de la clase hija");
  }
}

// Crear objetos para usar en las clases
const objetoPadre = new ClasePadre("Objeto Padre");
const objetoHija = new ClaseHija("Objeto Padre", "Objeto Hija");

// Llamar a los métodos de las clases
objetoPadre.metodo1();
objetoPadre.metodo2();

objetoHija.metodo1(); // La clase hija hereda los métodos de la clase padre
objetoHija.metodo2();
objetoHija.metodo3();
objetoHija.metodo4();

// Acceder a las propiedades de los objetos
console.log("Propiedad del objeto padre:", objetoPadre.objetoPropiedad);
console.log("Propiedad del objeto hijo:", objetoHija.objetoPropiedad);
console.log("Otra propiedad del objeto hijo:", objetoHija.otroObjetoPropiedad);
