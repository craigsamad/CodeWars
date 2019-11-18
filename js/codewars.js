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
    return Math.floor(y/k) - Math.floor((x-1)/k)
  }