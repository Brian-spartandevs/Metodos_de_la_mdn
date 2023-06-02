/* el metodo every() determina si todos los elementos en el array sastifacen una condicion */

const array1 = [22,3,44,55,32,12,32]

console.log(array1.every((element)=> element < 100))
console.log(array1.every((element)=> element > 1))
console.log(array1.every((element)=> element > 4))