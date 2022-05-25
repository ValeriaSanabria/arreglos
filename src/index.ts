let arreglo1: number[] = new Array(6);
let arreglo2: number[] = new Array(6);
let arregloSuma: number[] = new Array(6);

let numero1: number;
for (let indice1 = 0; indice1 < 6; indice1++) {
  numero1 = Number(
    prompt(
      "Arreglo1: Indique el numero que desea incorporar en la posicion " +
        indice1
    )
  );
  arreglo1[indice1] = numero1;
}
console.log("Arreglo1");
for (let indice1 = 0; indice1 < 6; indice1++) {
  console.log(
    "El numero en la posicion " + indice1 + " es " + arreglo1[indice1]
  );
}

let numero2: number;
for (let indice2 = 0; indice2 < 6; indice2++) {
  numero2 = Number(
    prompt(
      "Arreglo2: Indique el numero que desea incorporar en la posicion " +
        indice2
    )
  );
  arreglo2[indice2] = numero2;
}
console.log("Arreglo2");
for (let indice2 = 0; indice2 < 6; indice2++) {
  console.log(
    "El numero en la posicion " + indice2 + " es " + arreglo2[indice2]
  );
}

for (let indice = 0; indice < 6; indice++) {
  arregloSuma[indice] = arreglo1[indice] + arreglo2[indice];
  console.log("el numero sumado es : " + indice2 + " es " + arreglo2[indice2]);
}

console.log("el numero sumado es : " + arregloSuma);
