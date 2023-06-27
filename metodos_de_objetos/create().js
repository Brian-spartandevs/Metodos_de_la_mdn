/* El método Object.create() crea un objeto nuevo, utilizando un objeto existente como el prototipo del nuevo objeto creado. */

const person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  const me = Object.create(person);
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // Inherited properties can be overwritten
  
  me.printIntroduction();
  // Expected output: "My name is Matthew. Am I human? true"