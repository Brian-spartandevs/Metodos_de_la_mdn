/* el metodo flatMap() primero mapea cada elemento usasando una funcion de mapeo, luego aplana el resultado en una nueva matriz. Es identico a un map seguido de un flatten de profundidad 1, pero flatMap() es a menudo util y la fusion de ambos en un metodo es ligeramente mas eficiente. */

const array1 = [1, 2, 1];

const array2 = array1.flatMap((element) => element === 2 ? [2, 2] : 1);
console.log(array2)
