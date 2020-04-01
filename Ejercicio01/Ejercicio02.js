const { crearArchivo } = require('./multiplicar/multiplicar');

let base = 8;

crearArchivo(base).then((archivo) => console.log(`Archivo creado: ${archivo}`),
    (err) => {
        console.log(err)
    });