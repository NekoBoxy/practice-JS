// 2.7 編寫一個名為factorPrime的函式，唯一的參數是個整數n，回傳值是一個String，表示n的質因數分解結果。
// factorPrime(120); // returns "2 x 2 x 2 x 3 x 5"
// 12 = 2 * 2 * 3

function factorPrime(n) {
  let ansArr = []; // 存放回答(arr)
  let ansStr = ""; // 存放回答(str)
  let num = n; // 存放被處理過的 n = 新的被除數
  let prime = 2; // 存放新的質數

  // 以短除法的概念檢驗 n 是否為合數
  for (let i = 0; i < n; i++) {
    if (num % prime === 0) {
      // 被除數能被質數整除時
      ansArr.push(prime); // 存入 ansArr
      num = num / prime; // 修改被除數
    } else {
      // 被除數無法被質數整除時
      prime = prime + 1; // 修改質數
    }
  }

  // 將陣列另存成字串
  for (let j = 0; j < ansArr.length; j++) {
    if (j === 0) {
      // 首字需重新賦值
      ansStr = ansArr[j];
    } else {
      ansStr = ansStr + ' x ' + ansArr[j];
    }
  }
  return ansStr;
}

const result = factorPrime(120);

console.log(result); // 2 x 2 x 2 x 3 x 5