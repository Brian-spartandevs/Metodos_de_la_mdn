/* el metodo reduceRight aplica una funcion simultaneamente contra un acumulador y cada elemento de un array (De derecha a izquierda) para reducirlo a un unico valor. */

const array1 = ["snake", "spider", "cat", "dog"];

const result = array1.reduceRight((acc, cur) => acc + cur);

console.log(result);
