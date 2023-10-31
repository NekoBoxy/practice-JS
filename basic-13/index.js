// 2.3 編寫一個名為isPrime的函式，它接受一個整數作為參數，回傳值為一個boolean，告訴我們參數是否為一個質數。

// 質數：除了 1 和自己外，無法被其他數值整除的數字。
// 例： 2, 3, 5, 7, 11, 13, ...
// 備註： 1 不是質數

// // 解法 1
// function isPrime(n) {
//   // 用迴圈來計算數值是否為質數，若可整除就放入 arr 內，arr 若為空，即為質數
//   // 用自己除以自己以下的數值 n/(n-1、n-2、...)
//   let arr = [];

//   if (n === 1) {
//     return false;
//   }
// // 逆算
//   for (let i = n - 1; i >= 2; i--) {
//     if (n % i === 0) {
//       // 可整除的
//       arr.push(i);
//     }
//   }
//   return arr.length === 0;
// }

// n = 4;
// num = n / i;
// num = 4 / 3;
// num = 4 / 2;
// -----------


// 解法 2
function isPrime(n) {
  let arr = [];
  // 1 不是質數，須排除
  if (n === 1) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      // 若能整除(沒有餘數)，就不是質數
      // arr.push(i);
      return false;
    }
  }
  // return arr.length === 0;
  return true;
}
// n = 6;
// 6 / 2;
// 6 / 3;
// 6 / 4;
// 6 / 5;
// -----------

// q fix ver
// function isPrime(n) {
//   let arr = [];

//   if (n === 1) {
//     return false;
//   }

//   for (let i = n - 1; i >= 2; i--) {
//     if (n % i === 0) {
//       // 有任一值可整除，即不為質數
//       return false;
//     }
//   }
//   return true;
// }

// const num = 31;
// const result = isPrime(num);
// console.log(result);

console.log("1", isPrime(1));
console.log("2", isPrime(2));
console.log("3", isPrime(3));
console.log("4", isPrime(4));
console.log("5", isPrime(5));
console.log("6", isPrime(6));
console.log("7", isPrime(7));
console.log("8", isPrime(8));
console.log("9", isPrime(9));
console.log("10", isPrime(10));
console.log("11", isPrime(11));