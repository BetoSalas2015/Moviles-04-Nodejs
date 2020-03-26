function sumar(a, b) {
    return a + b;
}

let sumar1 = (a, b) => {
    return a + b;
}

let sumar3 = (a, b) => a + b;

console.log(sumar(5, 8));
console.log(sumar1(5, 8));
console.log(sumar3(5, 8));

let saludar = () => 'Hola mundo';
let saludar1 = nombre => `Hola ${nombre}`;


console.log(saludar());
console.log(saludar1('Roberto'));

let persona = {
    nombre: "Roberto",
    apellido: 'Salazar',
    edad: 45,
    getNombre: () => {
        return ` ${this.nombre} ${this.apellido}, edad: ${this.edad}`;
    }
};
console.log(persona.nombre);
console.log(persona.getNombre());