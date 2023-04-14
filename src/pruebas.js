/*const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;

  for (let i=0 ; i <numbers.length; i++){
    sum = sum + numbers[i];
  }
  return sum;
}

const finalSum= sumNumbers(numbers);
console.log(finalSum);

*/

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg) {
    let sum = 0;

    for (let i=0 ; i <numbersAvg.length; i++){
      sum = sum + numbersAvg[i];
    }
    return sum;
  }
  
  const finalSum= averageNumbers(numbersAvg);
  let elementsArray= numbersAvg.length;
  let finalNumbersAvg= finalSum / elementsArray;
  console.log(finalSum);
  console.log(elementsArray);
  console.log(finalNumbersAvg);



