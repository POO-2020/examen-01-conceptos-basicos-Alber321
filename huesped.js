export default class Huesped {
    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero
    }
    getDescripcion(){
        return (`${this.nombre} ${this.genero}`);
    }
}/*
let test = new Huesped ("Luis Alberto Solis","(Masculino)");
console.log(`${test.getDescripcion()}`);*/