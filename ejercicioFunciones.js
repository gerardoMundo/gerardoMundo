const siempreTrue = () => {
    return true;
};

const saludo = "Hola, soy una promesa";

const temporizador = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(saludo);
        }, 5000);
        reject('Error');
    });
}

temporizador().then(saludo => console.log(saludo));

function* generarId() {
    
    let id = 0;
    
    while(id <= 10) {
        id += 2;
        if(id === 10) {
            return id;
        }
        yield id;    
    };
};

const generador = generarId();

console.log(generador.next());
console.log(generador.next());
console.log(generador.next());






