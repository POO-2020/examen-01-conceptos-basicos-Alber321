export default class Hotel {
    constructor(nombre){
    this.nombre = nombre
    this.reservaciones = new Array()
    }
    getNumHuespedesTotal(){
        console.log("Huespedes Total: ")
        return this.huespedes.forEach((hue, i) => {
            console.log(`(${i+1}) ${hue.getDescripcion()}`)
        })
    }
    pritnReservacion(){
        console.log("Huespedes Total: ")
        this.reservaciones.forEach((res, i) => {
            console.log(`(${i+1}) ${res.getDescripcion()} --- ${res.print()}`)
        })
    }
}