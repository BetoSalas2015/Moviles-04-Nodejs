const argv = require('yargs')
    .command('listar', 'Imprime en pantalla la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Crea un archivo con la tabla de multiplicar especificada', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

const { crearArchivo, imprimeTabla } = require('./multiplicar/multiplicar');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        imprimeTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then((archivo) => console.log(`Archivo creado: ${archivo}`),
            (err) => {
                console.log(err)
            });
        break;
    default:
        console.log('Comando no reconocido'.red);

}