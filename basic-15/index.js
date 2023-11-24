// 2.5 編寫一個名為pyramid的函式，功能為按以下模式打印出星星層：
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

// n = 4
// sss*
// ss***
// s*****
// *******

// 用迴圈算行數 = n、空格與星數
function pyramid(n) {
  let result = "";

  // 最多為 n 層(列)，迴圈次數： i <= n
  // 決定內層的組成：空白 & * 的數量
  for (let i = 1; i <= n; i++) {
    // 1. 決定內層的空白數量，當 j 從 2 到 j = n - 1 時，需呈現的空白數
    // 每一個 i 都會對應到產生 j 數量的空白
    for (let j = i; j <= n - 1; j++) {
      result = result + " ";
    }

    // console.log((1 + (i - 1) * 2));

    // 2. 決定每層的星星數量
    // 概念與決定空白數量相同，星星數量為等差級數，起始為 1 ，公差為 d
    // 每一個 i 都會產生 a+(i-1)*d 的星星數
    for (let k = 1; k <= (2 * i - 1); k++) {
      // for (let k = 1; k <= (1 + (i - 1) * 2); k++) {
      result = result + "*";
    }
    // 真換行
    result = result + "\\n\n";
  }
  console.log(result);
}

// pyramid(1);
// pyramid(2);
// pyramid(4);
pyramid(10);
