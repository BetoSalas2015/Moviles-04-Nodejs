const argv = require('yargs').argv;

const { crearArchivo } = require('./multiplicar/multiplicar');


let argv2 = process.argv;

console.log(argv2);
console.log(argv);

let base = argv.base;



crearArchivo(base).then((archivo) => console.log(`Archivo creado: ${archivo}`),
    (err) => {
        console.log(err)
    });