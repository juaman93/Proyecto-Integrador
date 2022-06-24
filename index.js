// Alerta de bienvenida y explicación del proceso
alert(
  "Bienvenido a Money Delta.\n\nPasos para registrar un gasto:\n\n1. Ingresa tu salario\n2. Ingresa el monto del gasto\n3. Selecciona la categoría"
);

/* Declaración de variables a utilizar */

//Suma total de todos los gastos realizados durante todo el proceso
let gastoTotal = 0;

// Input realizado en el prompt
let input;
let inputInt; //Input parseado a Int

// Pasos del proceso de registro de gastos
let stringCategoriasBody =
  "\n1. Ocio\n2. Mercado\n3. Restaurantes\n4. Medicamentos\n5. Educación";
let stringPostBody =
  '\n\n- Ingresa "AGREGAR" para añadir una categoría.\n- Ingresa "SALIR" para salir de la aplicación.';

let promptSalario = "Ingresa tu salario:" + stringPostBody;
let promptMontoGasto = "Paso 2 - Ingresa el monto del gasto:" + stringPostBody;
let promptCategoria =
  "Paso 3 - Ingresa el número de la categoría de tu gasto:\n" +
  stringCategoriasBody +
  stringPostBody;

// Declaración de arreglo para pasos del proceso
let listaPromptPasos = [promptSalario, promptMontoGasto, promptCategoria];

/**
 * Declaración de arreglo de datos del perfil actual. Estructura:
 * datosPerfil[0] --> salario |
 * datosPerfil[1] --> montoGasto |
 * datosPerfil[0] --> idCategoria |
 */
const datosPerfil = [0, 0, 0];

// Declaración de arreglo vacío para guardar las categorías, su id y la cantidad de dinero gastado en cada categoría
const listaCategorias = [];
// Push de categorías iniciales al arreglo de categorías
cargarCategoriasPredeterminadas();

// Se itera sobre datos del perfil actual (salario, montoGasto, idCategoria)
for (let i = 0; i < datosPerfil.length; i++) {
  datosPerfil[i] = prompt(listaPromptPasos[i]);
  inputInt = parseInt(datosPerfil[i]);

  // Se valida input para ver si el usuario desea salir de la aplicación
  if (datosPerfil[i].toLowerCase() == "salir") {
    alert("Has elegido salir de la aplicación. Hasta la próxima!");

    break;
  }

  // Se valida input para ver si el usuario desea agregar una nueva categoría de gastos
  if (datosPerfil[i].toLowerCase() == "agregar") {
    let nuevaCategoria = prompt(
      "Por favor ingresa el nombre de la nueva categoría:"
    );

    // Se crea el nuevo objeto en el arreglo de categorías
    listaCategorias.push(
      new Categoria(listaCategorias.length + 1, nuevaCategoria, 0)
    );

    //Se reconstruye el string de opciones de categorías a escoger
    stringCategoriasBody = "";
    for (j = 0; j < listaCategorias.length; j++) {
      stringCategoriasBody += `\n${listaCategorias[j].idCategoria}. ${listaCategorias[j].nombreCategoria}`;
    }
    promptCategoria =
      "Paso 3 - Ingresa el número de la categoría de tu gasto:\n" +
      stringCategoriasBody +
      stringPostBody;
    listaPromptPasos = [promptSalario, promptMontoGasto, promptCategoria];
    console.log(listaPromptPasos);
    i--;
    continue;
  }

  // Se valida input para ver si el usuario ingresó un valor inválido
  if (isNaN(inputInt) || inputInt <= 0) {
    alert(
      "El valor ingresado no es válido. Por favor ingresa un valor válido."
    );
    i--;
    continue;
  }

  // Se valida input para ver si el usuario ingresó un valor inválido
  if (i == 2) {
    if (inputInt > listaCategorias.length) {
      alert(
        "El valor ingresado no es válido. Por favor ingresa un valor válido."
      );
      i--;
      continue;
    }

    // Se reinicia contador para mantenernos dentro del loop del programa
    i = 0;

    // Se asigna el monto del gasto a la categoría elegida
    listaCategorias[inputInt - 1].montoCategoria = datosPerfil[1];

    // Se construye string de lista de categorías para mostrar los gastos realizados en cada categoría
    let stringListaCategorias = "";

    for (j = 0; j < listaCategorias.length; j++) {
      stringListaCategorias +=
        listaCategorias[j].nombreCategoria +
        ": " +
        formatter.format(listaCategorias[j].montoCategoria) +
        "\n";
    }

    gastoTotal += parseInt(datosPerfil[1]);

    alert(
      "Estos son tus gastos actuales hasta el momento:\n\n" +
        stringListaCategorias +
        "\nGasto total: " +
        formatter.format(gastoTotal) +
        "\nSalario: " +
        formatter.format(datosPerfil[0])
    );

    if (gastoTotal > datosPerfil[0]) {
      alert(
        "ATENCIÓN: Tus gastos actuales han superado tu salario! Recuerda gastar MENOS de lo que ganas."
      );
    }
  }
}
