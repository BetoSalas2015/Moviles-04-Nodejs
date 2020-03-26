let empleados = [{
        id: 1,
        nombre: "David"
    },
    {
        id: 2,
        nombre: "Juan"
    },
    {
        id: 3,
        nombre: "Santiago"
    },
    {
        id: 4,
        nombre: "Martha"
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

let getUsuarioById = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleados => empleados.id === id);

        if (!empleadoDB) {
            reject(`El usuario con id ${id} no existen en la BD`)
        } else {
            resolve(empleadoDB);
        }
    });
};
// getUsuarioById(1).then("resolve","reject");

getUsuarioById(10).then(empleado => {
    console.log(empleado);
}, (err) => {
    console.log(err);
});

getUsuarioById(1).then



// Promise salarios
let getSalarios = (empleado) => {
    new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No hay salario para el usuario id ${empleado.nombre}`)
        } else {
            resolve(null, {
                id: empleado.id,
                nombre: empleado.nombre,
                salario: salarioDB.salario
            });
        }
    })
};


getUsuarioById(2).then(empleado => {
    getSalarios(empleado).then(((resp) => {
            console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
        },
        (err) => {
            console.log(err);
        }));
}, (err) => {
    console.log(err);
});

getUsuarioById(2).then(empleado => {
        getSalarios(empleado).then(((resp) => {
            console.log(`El salario de ${resp.nombre} es de ${resp.salario} `);
        }, (err) => {
            console.log(err);
        }));
    },
    (err) => {
        console.log(err);
    });