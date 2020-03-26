/* setTimeout(() => {
    console.log("Saludos Programas!!!");

}, 3000); */

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Roberto',
        id
    };

    if (id === 20) {
        callback(`El usuario con id ${id} no existe eb la BD`)
    } else {
        callback(null, usuario);
    }


};


getUsuarioById(10, (err, usuario) => {
    if (err)
        return console.log(err);
    console.log('Usuario de la base de datos ', usuario);

})