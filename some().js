/* el metodo some() comprueba si al menos un elemento del array cumple con la condicion implementada por la funcion de prueba */

const array = [1, 2, 3, 4, 5, 6];

const even = (element) => element % 2 === 0;

console.log(array.some(even));
