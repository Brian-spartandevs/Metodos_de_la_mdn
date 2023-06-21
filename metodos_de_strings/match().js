/* El método match() devuelve todas las ocurrencias de una expresión regular dentro de una cadena. */

const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
