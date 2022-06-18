// Código del cuadrado
console.group("Cuadrado");

function perimetroCuadrado (lado){
  return lado * 4;
}

function areaCuadrado (lado){
  return lado * lado;
}

console.groupEnd();


// Código del triángulo
console.group("Tríangulo");

function perimetroTriangulo(lado1, lado2, base) {
  return  lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
  return (base * altura) / 2;
}

console.groupEnd();


// Código del círculo
console.group("Círculo");

// Diámetro
function diametroCirculo(radio){
  return radio *2;
}

// PI
const PI = Math.PI;
// console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo (radio){
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo (radio){
  return (radio * radio) * PI;
}

console.groupEnd();