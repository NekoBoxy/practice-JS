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

  // 最多為 n 行
  for (let i = 1; i <= n; i++) {
    // 決定 n = 2 ~ 4 時的空格
    for (let j = i; j <= n - 1; j++) {
      result = result + " ";
    }
    // 決定 n = 5 後的星星數
    // console.log((1 + (i - 1) * 2));
    for (let k = 1; k <= (1 + (i - 1) * 2); k++) {
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
