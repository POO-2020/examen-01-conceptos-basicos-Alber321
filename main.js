import Huesped from "./huesped.js"
import Reservacion from "./reservacion.js"
import Hotel from "./hotel.js"
class Main {
    constructor(){
        this.nombreHuesped = new Huesped ("Juan Perez", "(Masculino)")
        this.nombreHuesped2 = new Huesped ("Maria Hernandez", "(Femenino)")
        this.nombreHuesped3 = new Huesped ("Pedro Picapiedra", "(Masculino)")
        this.nombreHuesped4 = new Huesped ("Vilma Picapiedra", "(Femenino)")
        this.reservacion = new Reservacion("12345", new Date(2020, 3, 3),"3")
        this.reservacion.addHuesped(this.nombreHuesped)
        this.reservacion.addHuesped(this.nombreHuesped2)
        this.reservacion2 = new Reservacion("54321", new Date(2020,2,3), "2")
        this.reservacion2.addHuesped(this.nombreHuesped3)
        this.reservacion2.addHuesped(this.nombreHuesped4)
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
        
        console.log(this.reservacion2.getFechaFormatoCorto())
        console.log(this.reservacion2.getNumHuespedes())
        console.log(this.reservacion2.print())
    }
    pruebaHotel() {
        console.log (this.Hotel)
        console.log (this.Hotel.getNumHuespedesTotal())
        console.log (this.Hotel.pritnReservacion())
    }
}let test = new Main()
test.pruebaNombreHuesped();
test.pruebaReservacion();
test.pruebaHotel();