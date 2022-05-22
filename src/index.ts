let arreglo1: number[] = new Array(6);
let arreglo2: number[] = new Array(6);

//let suma: number;

  
let numero1:number, indice1:number
  for(indice1 = 0; indice1 < 6; indice1++) {
    numero1 = Number(prompt("Arreglo1: Indique el numero que desea incorporar en la posicion " + indice1));
    arreglo1[indice1] = numero1;
  }
  console.log("Arreglo1");
  for(indice1 = 0; indice1 < 6; indice1++) {
    console.log("El numero en la posicion " + indice1 + " es " + arreglo1[indice1]);
  }

let numero2:number, indice2:number
  for(indice2 = 0; indice2 < 6; indice2++) {
    numero2 = Number(prompt("Arreglo2: Indique el numero que desea incorporar en la posicion " + indice2));
    arreglo2[indice2] = numero2;
  }
  console.log("Arreglo2");
  for(indice2 = 0; indice2 < 6; indice2++) {
    console.log("El numero en la posicion " + indice2 + " es " + arreglo2[indice2]);
  };
 
  console.log(
    "el numero sumado es : ",
    arreglo1[0] + arreglo2[0],
    arreglo1[1] + arreglo2[1],
    arreglo1[2] + arreglo2[2],
    arreglo1[3] + arreglo2[3],
    arreglo1[4] + arreglo2[4],
    arreglo1[5] + arreglo2[5]
  );

/*function sumarDosArreglos(arreglo1: number, arreglo2: number): number {
  let i:number;
  for(i=1; i<=6 ; i++ ) {
  suma = arreglo1 + arreglo2;
  };
    return(suma)
  }
  console.log("El arreglo suma es: ", sumarDosArreglos);*/



