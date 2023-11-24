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
  // 最多 n 層
  for (let i = 1; i <= n; i++) {
    // 決定空格數量
    // An = A1 +(n-1)*d
    // An = 0 + (i-1)*1
    for (let j = 1; j <= i - 1; j++) {
      result = result + " ";
    }

    // 決定星星數量(遞減)
    // An = A1 + (n-1)*d
    // An = (n*2-1) + (n-1)*(-2)
    // for(起始： k = 1 ；總共執行的次數；次數遞增 1){
    for (let k = 1; k <= ((n * 2 - 1) + (i - 1) * -2); k++) {
      result = result + "*";
    }
    result = result + "\n";
  }
  console.log(result);
}

inversePyramid(4);