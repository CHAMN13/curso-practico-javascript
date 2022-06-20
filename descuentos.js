// const precioOriginal = 120;
// const descuento = 18;

// const porcentajePrecioConDescuento = 100 - descuento;
// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// });

function calcularPrecioConDescuento (precio, descuento){
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function calcularPrecioDescuento(){
  const inputPrecio = document.getElementById("InputPrecio");
  const precioValor = inputPrecio.value;

  const inputDescuento = document.getElementById("InputDescuento");
  const descuentoValor = inputDescuento.value;

  const precioConDescuento = calcularPrecioConDescuento(precioValor, descuentoValor);

  const precioResultado = document.getElementById("precioResultado");
  precioResultado.innerText = "El precio con descuento son: $ " + precioConDescuento;
}