/* el metodo fill() cambia todos los elementos en un arreglo por un valor estatico, desde el indice start (por defecto 0) hasta el indice end (por defecto array.length). Devuelve el arreglo modificado */

let array1 = ["a", "b", "c", "d", "e"];

array1.fill("1", 3);
console.log(array1);

let array2 = ["a", "b", "c", "d", "e"];

array2.fill("2", 1, 3);
console.log(array2);
