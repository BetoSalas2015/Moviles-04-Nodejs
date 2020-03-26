let empleados = [{
        id: 1,
        nombre: 'Roberto'
    },
    {
        id: 2,
        nombre: 'Juan'
    },
    {
        id: 3,
        nombre: 'Santiago'
    },
    {
        id: 4,
        nombre: 'Martha'
    }
];
let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1200
    },
    {
        id: 3,
        salario: 1500
    }
];

let getUsuarioById = (id, callback) => {
    let empleadoDB = empleados.find((empleados) => empleados.id === id);
    if (!empleadoDB) {
        callback(`El usuario con id ${id} no existe eb la BD`)
    } else {
        callback(null, empleadoDB);
    }
};

let getSalarios = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        callback(`No hay salario para el usaurio ${empleado.nombre}`);
    } else {
        callback(null, { id: empleado.id, nombre: empleado.nombre, salario: salarioDB.salario })
    }

};

/* {
    id: id,
    nombre: "Oberto",
    salario: 1000
 } */

getUsuarioById(4, (err, empleado) => {
    if (err)
        return console.log(err);

    getSalarios(empleado, (err, resp) => {
        if (err) {
            return console.log(err);
        }
        console.log(`El salario de ${resp.nombre} es de ${resp.salario} `);

        
    });


})