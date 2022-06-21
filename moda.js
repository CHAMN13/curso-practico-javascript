const lista1 = [
  1,
  2,
  3,
  1,
  2,
  3,
  4,
  2,
  2,
  2,
  1,
];

const lista1Contador = {};
lista1.map(
  function (elemento){
    if (lista1Contador[elemento]) {
      lista1Contador[elemento] += 1;
    } else {
      lista1Contador[elemento] = 1;
    }
  }
);

const lista1Array = Object.entries(lista1Contador).sort(
  function (elementoA, elementoB) {
    return elementoA[1] - elementoB[1];
  }
);

const moda = lista1Array[lista1Array.length - 1];