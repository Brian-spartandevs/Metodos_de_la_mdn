/* el metodo findLast() itera la matriz en orden inverso y devuelve el valor del primer elemento que sastiface la funcion de prueba proporcionada. Si ningun elemento sastiface la funcion de prueba, se devuelve undefined */

const array1 = [0, 1, 2, 0];

console.log(array1.findLast((element) => element > 0));
