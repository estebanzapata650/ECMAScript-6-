// aplanar un arreglo y se le indica a que profundidad 
let array  = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat(2));


// mapeo a un arreglo y generamos uno nuevo a partir de este con la logica que necesitemos
let array2 = [1,2,3,4,5,6];
console.log(array2.flatMap(value => [value, value**2]));

// eliminar los espacios en blanco de un string al inicio y al final 
let hello = '       hello world            ';
console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());
console.log(hello.trim());

// pasar el parametro de error al valor de catch sin tener que pasarlo como argumento
try {

} catch {
    error
}

// convertir un arreglo en un objeto 
let entries = [["name", "esteban"],["age",32]];
console.log(Object.fromEntries(entries));

//  permite regresar el descripcion opcional del Symbol
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);