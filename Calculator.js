
function sumOfNumbers(arrayOfNumbers) {
    let sumOfNumbers = 0; 
    for (let i = 0; i < arrayOfNumbers.length; i++)
           sumOfNumbers += arrayOfNumbers[i];
    return sumOfNumbers;
    }

let arrayOfNumbers = [7, 9, 4, 17];
document.write("Sum of given array is " + sumOfNumbers(arrayOfNumbers));

