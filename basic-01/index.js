// 1.1 編寫一個名為“printEvery3()”的函式，它打印出等差數列 1, 4, 7, …, 88。
// function printEvery3() {
//   // 先有個初始值
//   let num = 1;

//   // 再用迴圈疊加 num
//   // 當 num 到 88 時 print 並中止迴圈
//   while (num <= 88) {
//     console.log(num);
//     if (num === 88) break;
//     num = num + 3;
//   }
// };

// 改用 for 寫
function printEvery3() {
  // for 的起始是 0，迴圈次數只需 <
  // for 的起始是 1，迴圈次數必需為 <=
  for (let num = 1; num <= 88; num = num + 3) {
    console.log(num);
  }
};

printEvery3();