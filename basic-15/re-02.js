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

  // 決定層數，最多 n 層
  for (let i = 1; i <= n; i++) {
    // 決定空格，最多 n-1 格
    // 起始 j = i，代表以迴圈計算第 i 層時該有的空格數
    // 最多為 n - 1 個空格
    for (let j = i; j <= n - 1; j++) {
      result = result + "s";
    }

    // 決定星星數量
    // 數量(迴圈次數)是由等差級數決定 An = A1 + (n-1)*d。以此例來說，A1 = 1, d 為 2
    // 起始為 1 顆星星
    // 最多為 A1 + (i-1)*d；以 i 替代 n 是為了計算第 i 層的星星數量
    for (let k = 1; k <= (1 + (i - 1) * 2); k++) {
      result = result + "*";
    }
    result = result + "\n";
  }
  console.log(result);
}

// pyramid(1);
// console.log("=====");
pyramid(2);
// console.log("=====");
// pyramid(4);