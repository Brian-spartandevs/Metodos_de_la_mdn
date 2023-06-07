/* el metodo Array.of() crea una nueva instancia array con un numero variable de elementos pasados como argumento, independientemente del numero o tipo.

La diferencia entre Array.of() y el contructor Array residen en como maneja los parametro de tipo entero: Array.of(7) crea un array con un solo elemento, 7, mientras que Array(7) crea un array vacio con una propiedad length de 7 (NOTA: esto implica un array de 7 ranuras vacias, no ranuras con valores undefined). */

console.log(Array.of(1, 4, 3, 45));

console.log(Array.of("Brian", "Arrieta"));

console.log(Array(7));

console.log(Array(1, 2, 3));
