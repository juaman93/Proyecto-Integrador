class Categoria {
  constructor(idCategoria, nombreCategoria, montoCategoria) {
    this.idCategoria = idCategoria;
    this.nombreCategoria = nombreCategoria;
    this.montoCategoria = montoCategoria;
  }
}

class Gasto {
  constructor(idGasto, nombreGasto, montoGasto, fechaGasto) {
    this.idGasto = idGasto;
    this.nombreGasto = nombreGasto;
    this.montoGasto = montoGasto;
    this.fechaGasto = fechaGasto;
  }
}

/* Formato de moneda para montos de dinero */
let formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
});

/* Push de categorías iniciales al arreglo de categorías */
function cargarCategoriasPredeterminadas() {
  listaCategorias.push(new Categoria(1, "Ocio", 0));
  listaCategorias.push(new Categoria(2, "Mercado", 0));
  listaCategorias.push(new Categoria(3, "Restaurantes", 0));
  listaCategorias.push(new Categoria(4, "Medicamentos", 0));
  listaCategorias.push(new Categoria(5, "Educación", 0));
}
