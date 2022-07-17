// replace All

const string = "Mi texto de ejemplo para ES12 JavaScript, JavaScript es lo mejor!!!";
const replacedString = string.replace("JavaScript", "Python");
const replaceAllString = string.replaceAll("JavaScript", "Python");

console.log(string);
console.log(replacedString);
console.log(replaceAllString);

// metodos privados con el #;

class Message {
    #show(val) {
        console.log(val);
    };
}
const message = new Message();
message.show('Hola Mundo'); // me va a devolverver error ya que solo lo puedo acceder al interiori de mi clase

// Promise any captura la respuesta de la primera promesa satisfactoria.

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));


Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));

// WeakRef(element);

class anyClass{
    constructor(element){
        this.ref = new WeakRef(element);   
    }
}

// Nuevos operadores lógicos
// Asignación AND (&&=), en caso de cumplirse una verdad, asigna un valor a una variable.
// Asignación OR (||=), en caso de cumplirse una falsedad, asigna un valor a una variable.
// Asignación Nullish (??=), en caso de cumplirse undefined o null, asigna un valor a una variable.

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue1 = true;
let isFalse1 = false;
console.log(isTrue1 ||= isFalse1);

let isTrue2 = undefined;
let isFalse2 = false;
console.log(isTrue2 ??= isFalse2);