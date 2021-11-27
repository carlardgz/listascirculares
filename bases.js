export default class Base {
  constructor(nombre, minutos) {
    this.nombre = nombre;
    this.minutos = minutos;
    this.siguiente = null;
    this.anterior = null;
  }

  iformacion() {
    return "Nombre: " + this.nombre + ", " + "Minutos: " + this.minutos;
  }
}
