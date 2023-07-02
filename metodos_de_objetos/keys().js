/* El método estático Object.keys() devuelve un arreglo de propiedades enumerables propias de un objeto dado. */

const obj = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3",
};

const keys = Object.keys(obj);
console.log(keys); // ['prop1', 'prop2', 'prop3']
