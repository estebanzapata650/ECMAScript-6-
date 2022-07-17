// extraer un elemento de un objeto con el operador de propagacion
const obj = {
    name : 'Esteban', 
    age: 32, 
    country: 'COL'
};

let {name, ...all} = obj;
console.log(name, all);

// Unir dos objetos con el operador de propagacion
const obj1 = {
    name: 'Esteban', 
    age: 32
}

const obj2 = {
    ...obj1,
    country: 'COL'
}

console.log(obj2);

// saber cuando a terminado un llamado
const helloWorld = () =>{
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('HelloWorld'), 3000)  
            : reject(new Error('Test Error'))
    });
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))

// Trabajar con los regex en grupos
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);