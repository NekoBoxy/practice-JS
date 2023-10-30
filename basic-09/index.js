// 1.9 編寫一個名為stars2的函式，功能為按以下模式打印出星星層：

// 一般 ver，用 console.log + 迴圈 一次次的 print 出結果
function stars2(n) {
  let word = "";
  // 決定 word 內的星星數量並 print
  for (let i = 1; i <= n; i++) {
    word += "*";
    console.log(word);
  }

  // 決定下半部的星星數量與遞減
  for (let i = n - 1; i >= 1; i--) {
    let revWord = "";
    for (let j = 1; j <= i; j++) {
      revWord += "*";
    }
    console.log(revWord);
  }
};

// 真換行 ver，可用 return 一次得到結果；對應正常情境
// function stars2(n) {
//   let star = "";
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//       star += "*";
//     }
//     // 真換行
//     star += "\n";
//   }
//   for (let i = n - 1; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {
//       star += "*";
//     }
//     // 真換行
//     star += "\n";
//   }
//   console.log(star);
// };

// 複雜 ver：用最少的迴圈完成，但邏輯複雜 by Q
// function stars2(n) {
//   let star = "";
//   let stars = 0;
//   const len = 2 * n - 1;
//   for (let i = 1; i <= len; i++) {
//     if (i > n) {
//       stars = len - i + 1;
//     } else {
//       stars = i;
//     }
//     for (let j = 1; j <= stars; j++) {
//       star += "*";
//     }
//     // 真換行
//     star += "\n";
//   }
//   console.log(star);
// };

stars2(3);
// *
// **
// ***
// **
// *

// 單純數字版
// function printNum(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(i);
//   }

//   for (let i = n - 1; i >= 1; i--) {
//     console.log(i);
//   }
// }

// printNum(3);
// 1
// 2
// 3
// 2
// 1
