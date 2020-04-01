const fs = require('fs');

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

module.exports = {
    crearArchivo
}