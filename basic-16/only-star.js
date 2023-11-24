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

function printStars(n) {
  let result = "";
  // 最多 n 層
  for (let i = 1; i <= n; i++) {

    // 決定星星數量
    // An = A1 +(n-1)*d
    // n = 4
    // A1 = 4*2-1 = 7 ... 第一層
    // A2 = 3*2-1 = 5 ... 第二層
    // A3 = 2*2-1 = 3 ... 第三層
    // A4 = 1*2-1 = 1 ... 第四層

    // 逆印星 pseudo code
    // for(起始： j = 1 ；總共執行的次數；次數遞增 1){
    for (let j = 1; j <= ((n * 2 - 1) + (i - 1) * (-2)); j++) {
      result = result + "*";
    }
    result = result + "\n";
  }
  console.log(result);
}

printStars(4);