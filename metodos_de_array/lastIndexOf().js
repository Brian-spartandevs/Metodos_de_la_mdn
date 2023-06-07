/* el metodo lastIndexOf() devuelve el ultimo indice en el que cierto elemento puede encontrarse en el arreglo, o -1 en el caso de que no se escuentre. El arreglo es recorrido en sentido contrario, empezando por el indice fromIndex. */

const array1 = ["d", "b", "c", "c", "d"];

console.log(array1.lastIndexOf("d",3));
console.log(array1.lastIndexOf("d",4));
console.log(array1.lastIndexOf("d"));
