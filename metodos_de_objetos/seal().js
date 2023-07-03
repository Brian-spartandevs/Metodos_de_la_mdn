/* El método Object.seal() sella un objeto, previniendo que puedan añadirse nuevas propiedades al mismo, y marcando todas las propiedades existentes como no-configurables. Los valores de las propiedades presentes permanecen pudiendo cambiarse en tanto en cuanto dichas propiedades sean de escritura. */

const obj = {
  prop1: "value1",
  prop2: "value2",
};

console.log(Object.isSealed(obj)); // false

Object.seal(obj);

console.log(Object.isSealed(obj)); // true

obj.prop1 = "new value";
console.log(obj.prop1); // 'new value'