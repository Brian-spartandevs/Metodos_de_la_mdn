/* El método Object.preventExtensions() previene que nuevas propiedades sean agregadas a un objeto (p.e. previene la extensión futuras al objeto). */

const obj = {
  prop1: "value1",
  prop2: "value2",
};

console.log(Object.isExtensible(obj)); // true

Object.preventExtensions(obj);

console.log(Object.isExtensible(obj)); // false

obj.prop3 = "value3";
console.log(obj.prop3); // undefined
