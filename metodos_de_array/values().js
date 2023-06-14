/* el metodo values() devuelve un nuevo objeto array iterador que contiene los valores para cada indice del array. */

const a = ["b", "c", "m", "p", "z"];

const iterador = a.values();

console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
