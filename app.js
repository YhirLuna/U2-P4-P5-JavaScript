const precioBase = 100;
const IVA = 0.16;
let costoTotal;

costoTotal = precioBase + (precioBase * IVA);
console.log(precioBase);
console.log("El costo total con IVA es: " + costoTotal);
let esBarato = costoTotal < 150;

console.log(esBarato);