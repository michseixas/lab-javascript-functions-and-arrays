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


/* solución Mich no aceptada por Jasmin
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
  console.log(finalNumbersAvg); */


  /* Solución aceptada por Jasmin:
  
  const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

  function averageNumbers(numbersAvg) {
    if (numbersAvg.length === 0) {
      return null;
    }

    let sum = 0;
    for (let i = 0; i < numbersAvg.length; i++) {
      sum = sum + numbersAvg[i];
    }
    return sum / numbersAvg.length;
  }
    
  console.log( averageNumbers(numbersAvg) ); */

  
  function howManyTimes(array, word) {
    if (array.length === 0 || array.indexOf(word) === -1 ) {
      return 0;
    } 
    const finalArr =[];
    let i = array.indexOf(word);
    while ( i !== -1) {
      finalArr.push(i);
      i = array.indexOf(word, i+1);
    }
  return finalArr.length;
  }

  const wordsCount = [
    'machine',
    'matter',
    'subset',
    'trouble',
    'starting',
    'matter',
    'eating',
    'matter',
    'truth',
    'disobedience',
    'matter'
  ];
  
  console.log(  howManyTimes(wordsCount, 'subset')  );
  console.log(  howManyTimes(wordsCount, 'bochita')  );
  console.log(  howManyTimes(wordsCount, 'matter')  );


/*
  // Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(wordsWithDuplicate) {
  
}
*/



  