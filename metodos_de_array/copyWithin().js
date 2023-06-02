/* el meotodo copyWithin transfiere una copia plana de una seccion a otra dentro del mismo array ( o contexto similar ), sin modificar su propiedad length y lo devuelve */

let array1 = ["a","b","c","d","e"]

//el primer indice pasado al metodo es donde se va a copiar el segundo indice pasado hasta el tercer indice pasado sin copiar este ultimo
array1.copyWithin(0,1,2)
console.log(array1)

let array2 = ["a","b","c","d","e","f"]

//si no se coloca el final, los copia hasta el fin y devuelve los elementos copiados desde la posicion indicada
array2.copyWithin(1,3)
console.log(array2)