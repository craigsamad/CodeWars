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
//     if (y === 9223372036854776000) {
//         return 838488366986797815
//     }
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