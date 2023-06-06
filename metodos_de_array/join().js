/* el metodo join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena. */

const strings = ["Space", "Win", "Sky"];

const newString = strings.join();

console.log(strings.join(""));
console.log(strings.join());

console.log(typeof newString);
console.log(typeof strings);
