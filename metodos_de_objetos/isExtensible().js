/* El método Object.isExtensible() determina si un objeto es extendible (si puede tener propiedades nuevas agregadas a éste). */

const obj1 = {};
console.log(Object.isExtensible(obj1)); // true

const obj2 = Object.preventExtensions({});
console.log(Object.isExtensible(obj2)); // false
