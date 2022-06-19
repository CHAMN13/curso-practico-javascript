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


// Conectar con formulario
// Cuadrado
function calcularPerimetroCuadrado(){
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado(){
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

// Tríangulo
function calcularPerimetroTriangulo(){
  const inputLado1 = document.getElementById("inputLado1");
  const valueLado1 = Number(inputLado1.value);

  const inputLado2 = document.getElementById("inputLado2");
  const valueLado2 = Number(inputLado2.value);

  const base = document.getElementById("inputBase");
  const valueBase = Number(base.value);
  
  const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
  alert ("El perímetro del tríangulo es: " + perimetro);
}

function calcularAreaTriangulo(){
  const base = document.getElementById("inputBase2");
  const valueBase = Number(base.value);

  const altura = document.getElementById("inputAltura");
  const valueAltura = Number(altura.value);

  const area = areaTriangulo(valueBase, valueAltura);
  alert ("El área del tríangulo es " + area);

}

// Círculo
function calcularPerimetroCirculo(){
  const inputPerimetro = document.getElementById("inputCirculo");
  const valuePerimetro = Number(inputPerimetro.value);

  const perimetro = perimetroCirculo(valuePerimetro);
  alert ("La circunferencia del círculo es: " + perimetro);
}

function calcularAreaCirculo(){
  const inputArea = document.getElementById("inputCirculo");
  const valueArea = Number(inputArea.value);

  const area = areaCirculo(valueArea);
  alert ("La circunferencia del círculo es: " + area);
}