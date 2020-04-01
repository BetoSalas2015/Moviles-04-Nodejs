const fs = require('fs');

let base = 8;
let data = '';

for (let index = 1; index <= 10; index++) {
    data += `${base} * ${index} = ${base * index} \n`;
}

fs.writeFile(`./tablas/Tabla del ${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log("El archivo se ha creado");

});