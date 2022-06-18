// Código del cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + " cm2");

console.groupEnd();


// Código del triángulo
console.group("Tríangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
  "Los lados del tríangulo miden: "
  + ladoTriangulo1 + " cm, "
  + ladoTriangulo2 + " cm, " 
  + baseTriangulo + " cm"
);

const alturaTriangulo = 5.5;
console.log("El altura del tríangulo es: " + alturaTriangulo + " cm2");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del tríangulo es: " + perimetroTriangulo + " cm2");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del tríangulo es: " + areaTriangulo + " cm2");

console.groupEnd();


// Código del círculo
console.group("Círculo");

// Radio
const radioCirculo = 4;
console.log("el radio del círculo es: " + radioCirculo + " cm");

// Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El díametro del círculo es: " + diametroCirculo + " cm");

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del círculo es: " + perimetroCirculo + " cm");

// Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del círculo es: " + areaCirculo + " cm2");

console.groupEnd();