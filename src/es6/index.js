// elementos por defecto
function elementosPorDefecto(name = 'Esteban', age = 32, country = 'EC'){
    console.log(name, age, country);
}
elementosPorDefecto();
elementosPorDefecto('Juan', 33, 'COL');

// templay con comillas
let hello = "Hello";
let world = "World";
let phrase = `${hello} ${world}`;
console.log(phrase);

// multilinea;
let lorem = `Lorem ipsum dolor sit amet accusam ipsum est voluptua ad dolore et nonummy clita facilisi zzril clita. Eos facilisis facilisi. Nonumy enim et diam aliquip nonumy duo amet justo nam sea. Dolore ut et sit duis et vel eum diam kasd at diam sed. Suscipit sanctus ipsum et.

Invidunt ipsum takimata takimata tempor sea dolor. Takimata voluptua nisl volutpat quod vulputate sed veniam zzril takimata voluptua rebum amet iriure. Eos tempor rebum ad est labore stet ipsum no velit lorem dolor est diam eirmod rebum ipsum. Sea sed labore ea autem lorem facilisis diam.`;
console.log(lorem);

// desestructuracion 
let person = {
    'name': 'Esteban Z',
    'age' : 32,
    'country' : 'COL'
}

let {name, age, country} = person;
console.log(name, age);

// unir diferentes elementos
let element1 = [1, 6 , 7];
let element2 = [5, 9 , 10];
let elementUnion = [11, ...element1, ...element2];
console.log(elementUnion);

// Crear objetos
let myName = 'Esteban';
let myAge = 32;
objMyData = {myName, myAge}
console.log(objMyData);

// funciones de tipo flecha
const names = [
    {name : 'Esteban', age : 32},
    {name : 'Juan', age : 33},
    {name : 'Alicia', age : 83},
    {name : 'Paola', age : 39}
];

names.map(item => console.log(item.name));

let listName = names.map(item => `${item.name} is ${item.age} years old`);
console.log(listName);

// promesas 
const helloPromise = () =>{
    return new Promise((resolve, reject) => {
        if (false){
            resolve('Ok!!!');
        }else{
            reject('Error =(');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(()=> console.log('Hola'))
    .catch(error => console.log(error));

//POO
class Calculadora{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum (valueA, valueB) {  
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new Calculadora(); 

console.log(calc.sum(8, 90));

// Import y export
import{ helloModule } from './module';
console.log(helloModule());

// Generator
function* helloWorld() {
    if (true){
        yield 'Hello, '
    }
    if (true){
        yield 'World';
    }
}

const generatorHello = helloWorld();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

