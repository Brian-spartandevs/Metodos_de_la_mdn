/* el metodo sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. La ordenacion no es necesariamente estable. El modo de ordenacion por defecto responde a la posicion del valor del string de acuerdo a su valor unicode. */

const puntos = [1, 10, 2, 21];
console.log(puntos.sort((a,b)=> a - b)); // [1, 10, 2, 21]


//En un ordenamiento numérico, 9 está antes que 80, pero dado que los números son convertidos a strings y ordenados según el valor Unicode, el resultado será "80" antes que "9".
console.log(puntos.sort());