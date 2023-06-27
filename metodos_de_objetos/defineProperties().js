/* El metodo Object.defineProperties() define nuevas o modifica propiedades existentes directamente en el objeto, retornando el objeto. */

//sintaxis

//Object.defineProperties(obj, propiedades)

//ejemplo

const obj = {
    property1: "False",
    property2: "Hi"
}

Object.defineProperties(obj, {
    "property1": {
      value: true,
      writable: true
    },
    "property2": {
      value: "Hello",
      writable: false
    }
    // etc. etc.
  });

  console.log(obj)