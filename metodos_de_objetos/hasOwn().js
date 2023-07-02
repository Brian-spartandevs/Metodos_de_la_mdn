/* El método estático Object.hasOwn() devuelve true si el objeto especificado tiene la propiedad indicada como propiedad propia. Si la propiedad es heredada, o no existe, el método devuelve false. */

const obj = {
  prop1: "value1",
  prop2: "value2",
};

console.log(obj.hasOwnProperty("prop1")); // true
console.log(obj.hasOwnProperty("prop3")); // false
