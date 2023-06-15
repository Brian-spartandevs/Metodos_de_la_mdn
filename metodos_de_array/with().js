/* el metodo with() de las instancias de matriz es la version de copia del uso de la notacion de corchetes para cambiar el valor de un indice dado. Devuelve una nueva matriz con el elemento en el indice dado reeplazado por el valor dado. */

const arr = [1, 2, 3, 4, 5];

console.log(arr.with(0, 2)); //returns [2,2,3,4,5]

console.log(arr); //returns [1,2,3,4,5]
