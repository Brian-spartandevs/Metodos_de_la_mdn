/* el metodo reduce() ejecuta una funcion reductora sobre cada elemento de un array, devolviendo como resultado un unico valor */

const array1 = [1, 2, 3, 4];

const result = array1.reduce((acc, cur) => acc + cur, 0);

console.log(result);
