/* el metodo findLastIndex() itera la matriz en orden inverso y devuelve el indice del primer elemento que sastiface la funcion de prueba proporcionada. Si ningun elemento sastiface la funcion de prueba, se devuelve -1. */

const array1 = ["String", "Array", "String"];

console.log(array1.findLastIndex((element) => element === "String"));
