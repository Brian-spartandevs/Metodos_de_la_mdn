/* el metodo entries() retorna un nuevo objeto array iterador que contiene los pares clave/valor para cada indice de la matriz. */

const array1 = [1, 2, 3, 4, 5];

const iterador = array1.entries();

console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
