/* El método toLocaleUpperCase() devuelve la cadena de llamada Valor convertido a mayúsculas, según las asignaciones de mayúsculas y minúsculas específicas de la configuración regional. */

const city = 'istanbul';

console.log(city.toLocaleUpperCase('en-US'));
// Expected output: "ISTANBUL"

console.log(city.toLocaleUpperCase('TR'));
// Expected output: "İSTANBUL"