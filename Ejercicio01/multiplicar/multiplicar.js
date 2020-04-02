const fs = require('fs');
const colors = require('colors');

crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        let data = '';

        for (let index = 1; index <= 10; index++) {
            data += `${base} * ${index} = ${base * index} \n`;
        }

        fs.writeFile(`./tablas/Tabla del ${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla del ${base}.txt`);


        });
    });
};

imprimeTabla = (base, limite) => {

    console.log('=============================='.magenta);
    console.log(`        Tabla del ${base}`.magenta);

    console.log('=============================='.magenta);


    for (let index = 1; index <= limite; index++) {
        console.log(`${base} * ${index} = ${base * index} `);
    }
}


module.exports = {
    crearArchivo,
    imprimeTabla
}