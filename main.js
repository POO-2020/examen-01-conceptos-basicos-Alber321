import Huesped from "./huesped.js"
import Reservacion from "./reservacion.js"
import Hotel from "./hotel.js"
class Main {
    constructor(){
        this.nombreHuesped = new Huesped ("Juan Perez", "(Masculino)")
        this.nombreHuesped2 = new Huesped ("Maria Hernandez", "(Femenino)")
        this.reservacion = new Reservacion("12345", new Date(3,3,2020),"3")
        this.reservacion.addHuesped(this.nombreHuesped)
        this.reservacion.addHuesped(this.nombreHuesped2)
        this.Hotel = new Hotel ("Hotel California", this.reservacion)
    }
    pruebaNombreHuesped(){
        console.log(this.nombreHuesped.getDescripcion())
        console.log(this.nombreHuesped2.getDescripcion())
    }
    pruebaReservacion(){
        console.log(this.reservacion.getFechaFormatoCorto())
        console.log(this.reservacion.getNumHuespedes())
        console.log(this.reservacion.print())
    }
    
}let test = new Main()
test.pruebaNombreHuesped();
test.pruebaReservacion();