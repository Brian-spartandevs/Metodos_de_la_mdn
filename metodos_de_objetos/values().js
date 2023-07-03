/* El método Object.values() devuelve un array con los valores correspondientes a las propiedades enumerables de un objeto. Las propiedades son devueltas en el mismo orden a como lo haría un bucle for...in (la única diferencia es que un bucle for-in también enumera las propiedades en la cadena de prototipo de un objeto). */

const person = {
  name: "John",
  age: 30,
  city: "New York",
};

const values = Object.values(person);
console.log(values);
// ['John', 30, 'New York']
