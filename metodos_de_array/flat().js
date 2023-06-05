/* el metodo flat() crea una nueva matriz con todos los elementos de sub-array concatenados recursivamnete hasta la profundidad especificada. */

const array1 = [1, 2, 3, [4, 5, 6]];

console.log(array1.flat());

const array2 = [1, 2, 3, [4, 5, [6, 7]]];

console.log(array2.flat());
console.log(array2.flat(2));
