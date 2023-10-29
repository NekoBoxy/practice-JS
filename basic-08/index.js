// 1.8 編寫一個名為stars的函式，功能為按以下模式打印出星星層：

// 用迴圈
// 第一次 print 一個 *
// 第二次 print 兩個 **

// function stars(len) {
//   let star = "";
//   // for (let i = 0; i < len; i++) {
//   // 這樣寫更好、更直觀，當 i 為 1 時，print 出一個星
//   for (let i = 1; i <= len; i++) {
//     star = star + "*";
//   // 剛好 for + console.log 有斷行效果
//     console.log(star); 
//   }
// };

// Q ver
function stars(len) {
  let star = "";
  // for (let i = 0; i < len; i++) {
  for (let i = 1; i <= len; i++) {
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    // 真換行
    star += "\n";
  }
  console.log(star);
};

stars(5);
// *
// **
// ***
// ****
// *****
