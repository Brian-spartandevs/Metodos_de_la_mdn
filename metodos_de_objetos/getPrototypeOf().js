/* El método Object.getPrototypeOf() devuelve el prototipo (es decir, el valor de la propiedad interna [[Prototype]]) del objeto especificado. */

const animal = {
  sound: 'I make a sound',
  sleep() {
    console.log('Zzzzzz');
  }
};

const cat = Object.create(animal);
cat.name = 'Whiskers';

const catPrototype = Object.getPrototypeOf(cat);
console.log(catPrototype === animal); // true
