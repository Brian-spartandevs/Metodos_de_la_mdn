/* El método estático Object.defineProperty() define una nueva propiedad sobre un objeto, o modifica una ya existente, y devuelve el objeto modificado. */

let person = {};
Object.defineProperty(person, "id", { value: 1, writable: false });

console.log(person.id);
person.id = 2;
console.log(person.id);
