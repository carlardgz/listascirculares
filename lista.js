export default class Lista {
  constructor() {
    this.inicio = null;
    this.ultimo = null;
  }

  agregar(base) {
    if (this.inicio === null) {
      this.inicio = base;
      this.ultimo = base;

      this.inicio.siguiente = this.inicio;
      this.inicio.anterior = this.inicio;

      return base;
    } else {
      if (
        base.nombre === this.ultimo.nombre ||
        base.nombre === this.ultimo.siguiente.nombre
      ) {
        return null;
      }

      this.ultimo.siguiente = base;
      this.ultimo.siguiente.anterior = this.ultimo;
      this.ultimo = this.ultimo.siguiente;
      this.ultimo.siguiente = this.inicio;
      this.inicio.anterior = this.ultimo;

      return base;
    }
  }

  eliminar(base) {
    if (this.inicio === null) {
      console.log("La base no existe");
      return null;
    }

    if (
      this.inicio.siguiente.nombre === this.inicio.nombre ||
      this.inicio.anterior.nombre === this.inicio.nombre
    ) {
      this.ultimo = null;
      this.inicio = null;

      console.log("La base se ha borrado con éxito");
      return new Lista();
    }

    if (this.inicio === this.ultimo) {
      this.ultimo = null;
      this.inicio = null;

      console.log("La primera base y la última base se borraron con éxito");
      return base;
    }
  }

  listar() {
    return this.inicio.informacion();
  }
}
