/* el metodo filter() crea un nuevo array con todos los elementos que cumplan la condicion implementada por la funcion dada. */

const names = ["carlos","Brian","Laura","Jessica","Jose","Virginia","Pedro","Juan"];

const result = names.filter((name) => name.length > 6);
console.log(result);
