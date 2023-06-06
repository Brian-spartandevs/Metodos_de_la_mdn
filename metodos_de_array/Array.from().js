/* el metodo Array.from() crea una nueva instancia de Array a partir de un objeto iterable */

console.log(Array.from("foo"));

console.log(Array.from([1, 2, 3, 4], (x) => x + x));
