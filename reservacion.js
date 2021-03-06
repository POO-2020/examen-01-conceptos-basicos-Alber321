export default class Reservacion {
    /**
     * 
     * @param {number} numeroHabitacion 
     * @param {Date} fechaLlegada 
     * @param {number} noches 
     * @param {Huesped} huespedes 
     */

    constructor(numeroHabitacion, fechaLlegada, noches) {
        this.numeroHabitacion = numeroHabitacion;
        this.fechaLlegada = fechaLlegada;
        this.noches = noches;
        this.huespedes = new Array()
    }

    getFechaFormatoCorto() {
        return `Fecha llegada ${this.fechaLlegada.getDate()}/${
            this.fechaLlegada.getMonth()
            }/${this.fechaLlegada.getFullYear()}`;
    }

    addHuesped(huesped) {
        this.huespedes.push(huesped)
    }

    listarHuespedes() {
        this.huespedes.forEach((huesped, i) => {
            console.log(`${i} ${huesped.getDescripcion()}`);
        });
    }

    getNumHuespedes() {
        let x = this.huespedes.length;
        return (x);
    }


    print() {
        return `Habitación: ${this.numeroHabitacion} \n
        Fecha de Llegada ${ this.getFechaFormatoCorto()} \n
        ${this.noches} nohces reservadas \n
        `
    }
}
