/* el metodo keys() devuelve un nuevo objeto Array iterador que contiene las claves para cada indice en el arreglo */

const array1 = ["a", "b", "c"];

const iterador = array1.keys();

for (const key of iterador) {
  console.log(key);
}
