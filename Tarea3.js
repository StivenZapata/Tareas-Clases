// Crear un objeto interior para las frutas
const objetoInterior = {
    color: "",
    sabor: ""
  };
  
  // Crear objetos de frutas con objetos interiores
  const banano = { nombre: "Banano", detalles: { ...objetoInterior } };
  banano.detalles.color = "Amarillo";
  banano.detalles.sabor = "Dulce";
  
  const manzana = { nombre: "Manzana", detalles: { ...objetoInterior } };
  manzana.detalles.color = "Rojo";
  manzana.detalles.sabor = "Crispante";
  
  const pera = { nombre: "Pera", detalles: { ...objetoInterior } };
  pera.detalles.color = "Verde";
  pera.detalles.sabor = "Jugosa";
  
  // Crear un array de frutas
  const frutas = [banano, manzana];
  
  // Usar el método push() para agregar la Pera al array de frutas
  frutas.push(pera);
  
  // Usar el método forEach() para imprimir las frutas contenidas en el array
  frutas.forEach((fruta, indice) => {
    console.log(`Fruta ${indice + 1}:`);
    console.log(`Nombre: ${fruta.nombre}`);
    console.log(`Detalles:`);
    console.log(`  Color: ${fruta.detalles.color}`);
    console.log(`  Sabor: ${fruta.detalles.sabor}`);
    console.log("-------------------------");
  });
  
  