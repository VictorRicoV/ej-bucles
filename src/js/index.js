// El styles lo importamos aquí para que se encargue Vite de compilar todo
import "../scss/styles.scss";

const numbers = [12, 1, 2, 3, 4, 5, 6];

for (let counter = numbers.length - 1; counter >= 0; counter--) {
  console.log(counter);
}

const tenNumbers = (arrayAddition) => {
  let addition = 0;
  for (let counter = 0; counter < arrayAddition.length; counter++) {
    addition += arrayAddition[counter];
  }
  console.log(addition);
};
const arrayAddition = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
tenNumbers(arrayAddition);
