/**
 * Clase para crear objetos de categorías
 * @param  {Int}    idCategoria Número identificador
 * @param  {String} nombreCategoria Nombre descriptivo
 * @param  {Int}    montoCategoria Monto del gasto acumulado realizado en esta categoría
 *
 */
class Categoria {
  constructor(idCategoria, nombreCategoria, montoCategoria) {
    this.idCategoria = idCategoria;
    this.nombreCategoria = nombreCategoria;
    this.montoCategoria = montoCategoria;
  }
}

/**
 * Clase para crear gastos individuales
 * @param  {Int}    idGasto Número identificador
 * @param  {String} nombreCategoria Nombre de la categoría en el que se hizo el gasto
 * @param  {Int}    montoGasto Monto del gasto realizado
 *
 */
class Gasto {
  constructor(idGasto, nombreCategoria, montoGasto) {
    this.idGasto = idGasto;
    this.nombreGasto = nombreCategoria;
    this.montoGasto = montoGasto;
  }
}

/* Formato de moneda para montos de dinero */
let formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
});

/**
 * Función para cargar las categorías iniciales predeterminadas
 */
function cargarCategoriasPredeterminadas() {
  listaCategorias.push(new Categoria(1, "Ocio", 0));
  listaCategorias.push(new Categoria(2, "Mercado", 0));
  listaCategorias.push(new Categoria(3, "Restaurantes", 0));
  listaCategorias.push(new Categoria(4, "Medicamentos", 0));
  listaCategorias.push(new Categoria(5, "Educación", 0));
}

/**
 * Función para devolver el nombre de una categoría de acuerdo al número identificador de categoría proporcionado
 * @param  {Int} idCategoria Número identificador
 */
function traerNombreCategoria(idCategoria) {
  return listaCategorias[idCategoria - 1].nombreCategoria;
}
