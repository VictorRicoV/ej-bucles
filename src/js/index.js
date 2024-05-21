// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

const numbers = [12, 1, 2, 3, 4, 5, 6];

for (let counter = numbers.length - 1; counter >= 0; counter--) {
  console.log(counter);
}

const tenNumbers = arrayAddition => {
  let addition = 0;
  for (let counter = 0; counter < arrayAddition.length; counter++) {
    addition += arrayAddition[counter];
  }
  console.log(addition);
};
const arrayAddition = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
tenNumbers(arrayAddition);

//- Crea una función que reciba un número e imprima por consola la tabla de multiplicar del número que ha recibido hasta el 10. Para el 4 el resultado debe ser:

//- Crea una función que reciba el año actual y tu edad, la función debe imprimir:

const getNumbers = (year, age) => {
  console.log(`Naciste en el año ${year - age}`);
  for (let counter = 1; counter < 18; counter++) {
    if (counter === 1) {
      console.log(`En el año ${counter + (year - age)} cumpliste ${counter} años`);
    } else console.log(`En el año ${year - age + counter} cumpliste ${counter} años`);
  }
};

getNumbers(2024, 19);

//- Crea una función que reciba dos números e imprima todos los números pares desde el primero hasta el segundo. Si recibe 2 y 12 imprimirá 2, 4, 6, 8, 10, 12.

const evenNumbers = (numberA, numberB) => {
  for (let counter = numberA; counter <= numberB; counter++) {
    if (counter % 2 === 0) {
      console.log(counter);
    }
  }
};

evenNumbers(2, 12);

const twoArrays = (arrayA, arrayB) => {
  let arrayA = [];
  let arrayB = [];

  for (let counter = 0; counter < 6; counter++) {
    arrayA.push(Math.floor(Math.random() * 11));
    arrayB.push(Math.floor(Math.random() * 11));
    if(arrayA === arrayB)
  }
  
};
