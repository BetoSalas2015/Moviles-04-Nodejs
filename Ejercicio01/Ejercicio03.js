const { crearArchivo } = require('./multiplicar/multiplicar');


let argv = process.argv;
let argumento = argv[2]

let base = argumento.split('=')[1];

crearArchivo(base).then((archivo) => console.log(`Archivo creado: ${archivo}`),
    (err) => {
        console.log(err)
    });