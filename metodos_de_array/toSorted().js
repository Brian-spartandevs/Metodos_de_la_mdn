/* el metodo toSorted() de las instancias de array es la version de copia del metodo sort(). Devuelve una nueva matriz con los elementos ordenados en orden ascendente. */
//nota: este es un nuevo metodo que saldra, a la fecha del subido este codigo no aparece nada.

const array = [1, 2, 3, 4, 5];

const newArraySorted = array.toSorted((a, b) => a - b);

console.log(newArraySorted);
