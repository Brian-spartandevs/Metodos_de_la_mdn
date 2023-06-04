/* el metodo findIndex() devuelve el indice del primer elemento de un array que cumpla con la funcion de prueba proporcionada. En caso contrario devuelve -1. */

const array1 = ["cats", "dog", "frogs"];

console.log(array1.findIndex((element)=> element.length > 4))