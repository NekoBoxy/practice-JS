// 2.6 編寫一個名為inversePyramid的函式，功能為按以下模式打印出星星層：
// inversePyramid(4);
// *******
//  *****
//   ***
//    *
// 以 S 替換掉空格，更好閱讀/理解
// *******
// s*****
// ss***
// sss*

function inversePyramid(n) {
  let result = "";
  // n 是多少，就有多少層
  for (let i = 1; i <= n; i++) {
    // 空白的數量由 0 開始遞增
    for (let j = 1; j < n; j++) {
      result += "s";
      console.log(result);
    }

    // 星號的數量
    // for (let k = 1; k <= (1 + (i - 1) * 2); k++) {
    //   result = result + "*";
    // }
    // result = result + "\n";
  }
  // console.log(result);
}

inversePyramid(4);

// function test(n) {
//   let result = "";
//   for (let i = 1; i < n; i++) {
//     result += "s";
//     console.log(result);
//   }

// }

// test(4);