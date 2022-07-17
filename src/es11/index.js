const button = document.getElementById("btn");

button.addEventListener("click", async function(){
    const module = await import("./file.js");
    module.hello();
});

// big INT: permite trabajar con numeros mayores a 2**53

const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);
console.log(`primer numero: ${aBigNumber} y el mismo ${anotherBigNumber}`);

//  Promise All Settled

const promise1 = new Promise((resolve, reject) => reject("rechazada"));
const promise2 = new Promise((resolve, reject) => resolve("solucionada 1"));
const promise3 = new Promise((resolve, reject) => resolve("solucionada 2"));

Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response));

// Global This

console.log(window);
console.log(globalThis);

// Nuevo operador lógico: null operator

const fooo = 'soy string' ?? 'default';
console.log(fooo);

// Optional chaining

const user = {
    // profile : {
    //     email : 'estebanzapata650@gmail.com'
    // }
};

if (user?.profile?.email){
    console.log(user?.profile?.email);
}else{
    console.log('No existe el email');
}

