/*
 * Complete the 'minimumMoves' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY m
 */

function minimumMoves(a, m) {
    let moveCount = 0;

    for (let i = 0; i < a.length; i++) {
        let splitA = a[i].toString().split('');
        let splitM = m[i].toString().split('');

        for (let j = 0; j < splitA.length; j++) {
            if (splitA[j] > splitM[j]) {
                moveCount += splitA[j] - splitM[j];
            }
            else if (splitA[j] < splitM[j]){
                moveCount += splitM[j] - splitA[j];
            }
        }
    }

    return moveCount;
}

console.log(minimumMoves([123,543],[321,279]));

/*
 * Complete the 'fibonacci' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER n as parameter.
 */

function fibonacci(n) {
    let numMinus1 = 1;
    let numMinus2 = 0;
    let currentNum = 0;
    let outputArray = [];

    if (n === 1) {
        outputArray.push(0);
    }
    else {
        outputArray.push(0);
        outputArray.push(1);
    }

    for (let i = 0; i <= n-3; i++) {
        currentNum = numMinus1 + numMinus2;
        numMinus2 = numMinus1;
        numMinus1 = currentNum;
        outputArray.push(currentNum);
    }

    return outputArray;
}

// Define a function that takes an integer argument and returns logical value true or false 
// depending on if the integer is a prime.
// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive 
// divisors other than 1 and itself.

function isPrime(num) {
    let prime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            prime = false;
            break;
        }
    }
    return prime && (num > 1);
}

// You are going to be given a word. Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
    let position;
    let length;
    if ((s.length % 2) == 0) {
      position = s.length / 2 - 1;
      length = 2;
    } else {
      position = (s.length - 1) / 2;
      length = 1;
    }
    
    return s.substring(position, position + length);
  }
  
  console.log(getMiddle("test")); // es
  console.log(getMiddle("testing")); // t
  console.log(getMiddle("middle")); // dd

// You will be given an vector of string(s). You must sort it alphabetically (case-sensitive!!) and then return the first value.
// The returned value must be a string, and have "***" between each of its letters.
// You should not remove or add elements from/to the array.

function twoSort(s) {
    s.sort();
    let outputString = '';
    for (let i = 0; i < s[0].length-1; i++) {
        outputString += s[0].substring(i, i+1) + '***';
    }
    outputString += s[0].substring(s[0].length-1);
    return outputString;
}

//much better solution
function twoSort(s) {
    return s.sort()[0].split('').join('***');
}

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
    let sum = 0;
    for (let i = 3; i < number; i++) {
        if (i%3 === 0 || i%5 === 0) {
            sum += i;
        }
    }
    return sum;
}

// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. 
// Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n) {
    numArr = Array.from(n.toString());
    numArr.sort().reverse();
    let outputWord = '';
    numArr.forEach(num => outputWord += num);
    return parseInt(outputWord);
}

//much better solution
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''));
}

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed
// (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. 
// Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(inputStr) {
    const inputArr = inputStr.split(' ');
    let newStr = '';
    inputArr.forEach(word => {
        if (word.length >= 5) {
            newStr += word.split('').reverse().join('') + ' ';
        }
        else {
            newStr += word + ' ';
        }
    });
    const outputStr = newStr.substring(0, newStr.length-1);
    return outputStr;
}

// Write function divisibleCount(x, y, k) that takes in 3 numbers x, y and k, 
// and returns the number of integers within the range [x..y] that are divisible by k i.e.:
// { i : x ≤ i ≤ y, i mod k = 0 }
// For example:
// x = 6, y = 11 and k = 2, your function should return 3, because there are three numbers 
// divisible by 2 within the range [6..11], namely 6, 8 and 10.
// Note: x<=y

// function divisibleCount(x, y, k) {
//     let divCount = 0;
//     for (let i = x; i <= y; i++) {
//         if (i%k === 0) {
//             divCount++;
//         }
//     }
//     return divCount;
//  }

 function divisibleCount(x, y, k) {
    let first;
    let last;
    for (let i = x; i <= y; i++) {
        if (i%k === 0) {
            first = i;
            break;
        }
    }

    for (let i = y; i >= x; i--) {
        if (i%k === 0) {
            last = i;
            break;
        }
    }
    
    return last >= 0 && first >=0 ? last/k - first/k + 1 : 0;
 }

 //much better solution
 function divisibleCount(x, y, k) {
    return Math.floor(y/k) - Math.floor((x-1)/k);
  }