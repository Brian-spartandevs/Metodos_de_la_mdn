/* el metodo forEach() ejecuta la funcion indicada una vez por cada elemento del array */

const array1 = ["a", "b", "c", "d"];

const array2 = [2, 5, 7, 9];

array1.forEach((item) => console.log(item));

let sum = 0;
array2.forEach((item) => (sum += item));

console.log(sum)
