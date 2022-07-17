// transformar un objeto en una matriz
const data = {
    frontend: 'Esteban',
    backend: 'Juan',
    design: 'Ana'
}
const entries = Object.entries(data);
console.log(entries)
console.log(entries.length);

// transforma los valores de un objeto a un arreglo 
const data2 = {
    frontend: 'Pepe',
    backend: 'Pedro',
    design: 'Pablo'
}

const values = Object.values(data2);
console.log(values);
console.log(values.length);

// padding - transformar un string 
const nameString = 'Juan Pablo';
console.log(nameString.padStart(nameString.length + 3, 'hi '));
console.log(nameString.padEnd(nameString.length + 4, ' bye'));

// async await 
const helloWorld = () =>{
    return new Promise((resolve, reject) => {
        if (true){
            setTimeout(() =>{
                resolve('Hello World')
            }, 3000);
        }
        else {
            reject(new Error('Ocurrio un error.'));
        }
    });
};

const helloWorld2 = () =>{
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello 2 World'), 3000)
            : reject(new Error('Ocurrio un error.'))
    });
};

const helloAsync = async () => {
    const hello = await helloWorld();
    const hello2 = await helloWorld2();
    console.log(hello);
    console.log(hello2);
};

helloAsync();

// try catch
const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        const hello2 = await helloWorld2();
        console.log(hello);
        console.log(hello2);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();