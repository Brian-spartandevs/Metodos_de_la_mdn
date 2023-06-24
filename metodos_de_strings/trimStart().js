/* El método trimStart() quita el espacio en blanco del principio de una cadena y devuelve una nueva cadena, sin modificar la cadena original. es un alias de este método. */

const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trimStart());
// Expected output: "Hello world!   ";