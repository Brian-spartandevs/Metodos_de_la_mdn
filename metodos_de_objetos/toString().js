/* Devuelve una cadena que representa al objeto. */

const person = {
  name: "John",
  age: 30,
  toString() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};

console.log(person.toString()); // 'Name: John, Age: 30'
