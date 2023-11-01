// 2.3 編寫一個名為isPrime的函式，它接受一個整數作為參數，回傳值為一個boolean，告訴我們參數是否為一個質數。

// 質數：除了 1 和自己外，無法被其他數值整除的數字。
// 例： 2, 3, 5, 7, 11, 13, ...
// 備註： 1 不是質數

function isPrime(n) {
  // 是質數 > true
  // 不是質數 > false
  if (n === 1) return false;

  for (let i = 2; i < n; i++) {
    // 若 n / i 可整除(餘數為零) => 不是質數
    if (n % i === 0) return false;
  }

  // 若 for 跑完了都沒有結果 => 是質數
  return true;
}

console.log("1", isPrime(1));
console.log("2", isPrime(2)); // t
console.log("3", isPrime(3)); // t
console.log("4", isPrime(4));
console.log("5", isPrime(5)); // t
console.log("6", isPrime(6));
console.log("7", isPrime(7)); // t
console.log("8", isPrime(8));
console.log("9", isPrime(9));
console.log("10", isPrime(10));
console.log("11", isPrime(11)); // t