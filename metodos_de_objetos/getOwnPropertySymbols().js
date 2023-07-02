/* El método Object.getOwnPropertySymbols() regresa una colección de todos las propiedades de los simbolos encontrados directamente en un objeto dado. */

const obj = {
  [Symbol("symbol1")]: "value1",
  [Symbol("symbol2")]: "value2",
  regularProp: "regular value",
};

const symbols = Object.getOwnPropertySymbols(obj);
console.log(symbols); // [Symbol(symbol1), Symbol(symbol2)]
