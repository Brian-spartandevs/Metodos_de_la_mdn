/* El método toLocaleLowerCase() devuelve la cadena de llamada Valor convertido a minúsculas, según las asignaciones de mayúsculas y minúsculas específicas de la configuración regional. */

const dotted = 'İstanbul';

console.log(`EN-US: ${dotted.toLocaleLowerCase('en-US')}`);
// Expected output: "i̇stanbul"

console.log(`TR: ${dotted.toLocaleLowerCase('tr')}`);
// Expected output: "istanbul"