// pyramid(1);
// *
// pyramid(2);
// s*
// ***
// pyramid(4);
// sss*
// ss***
// s*****
// *******

function pyramid(n) {
  let result = "";

  // 先決定層數 n = 1 ~ n 
  for (let i = 1; i <= n; i++) {
    // 再決定空白數
    // j = n - 1
    // n = 1 時沒有空白，所以起始為 1
    // 用 i 控制迴圈內的空白數量，當 i 越大，空白數量越少
    for (let j = i; j <= n - 1; j++) {
      result = result + " ";
    }

    // 再決定星星數量
    // n = 1 時一顆，接著是等差級數增加，每次加 2
    // 最多到 (1 + (i - 1) * 2 顆
    // Ref: https://zh.wikipedia.org/zh-tw/%E7%AD%89%E5%B7%AE%E6%95%B0%E5%88%97
    for (let k = 1; k <= (1 + (i - 1) * 2); k++) {
      result = result + "*";
    }
    result = result + "\n";
  }
  console.log(result);
}

pyramid(1);
pyramid(2);
pyramid(4);