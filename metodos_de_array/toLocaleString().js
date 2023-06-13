/* el metodo toLocaleString devuelve una cadena de texto representando los elementos del array. Los elementos son convertidos a texto usando su metodo toLocaleString y dichos strings son separados por un caracter especifico para la localidad (como una coma para la separacion de decimales ","). */

const date = new Date()

console.log(date.toLocaleString())
console.log(date.toLocaleString("en-gt"))