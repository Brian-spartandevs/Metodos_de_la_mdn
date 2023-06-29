/* El método Object.getOwnPropertyNames() devuelve un array con todas las propiedades (numerables o no) encontradas en un objeto dado. */

const obj = {
    a: 1,
    b: 2,
    c: 3
};

const names = Object.getOwnPropertyNames(obj);
console.log(names);

let arr = ["a", "b", "c"];
console.log(Object.getOwnPropertyNames(arr));
