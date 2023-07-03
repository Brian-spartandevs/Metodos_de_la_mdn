/* El método Object.setPrototypeOf() establece el prototipo (p.e., la propiedad interna [[Prototype]]) de un objeto especificado a otro objeto o sino establece null. */

const animal = {
  sound: "I make a sound",
  sleep() {
    console.log("Zzzzzz");
  },
};

const cat = {
  name: "Whiskers",
};

console.log(cat.sound); // undefined
Object.setPrototypeOf(cat, animal);
console.log(cat.sound); // 'I make a sound'
cat.sleep(); // 'Zzzzzz'
