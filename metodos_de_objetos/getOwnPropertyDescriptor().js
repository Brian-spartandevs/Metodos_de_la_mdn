/* El método Object.getOwnPropertyDescriptor() regresa como descripción de propiedad para una propiedad propia (eso es, una presente directamente en el objeto, no presente por la fuerza a través de la cadena de prototipo del objeto) de un objeto dado. */

let obj = {
    name: "Brian",
    yearsOld: 21
}

console.log(Object.getOwnPropertyDescriptor(obj, "name"))
