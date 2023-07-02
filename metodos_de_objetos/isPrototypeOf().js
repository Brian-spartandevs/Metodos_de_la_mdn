/* El método isPrototypeOf() comprueba si un objeto se encuentra en la cadena de prototipado de otro. */

const animal = {
  sound: "I make a sound",
  sleep() {
    console.log("Zzzzzz");
  },
};

const cat = Object.create(animal);
cat.name = "Whiskers";

console.log(animal.isPrototypeOf(cat)); // true
console.log(cat.isPrototypeOf(animal)); // false
