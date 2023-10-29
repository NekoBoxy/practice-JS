// 1.9 編寫一個名為stars2的函式，功能為按以下模式打印出星星層：

// function stars2(len) {
//   let word = "";
//   let jWord = "*";
//   for (let i = 1; i <= len; i++) {
//     // word = word + 1;
//     word += "*";
//     jWord += "*";
//     console.log(word);
//   }

//   for (let j = 1; j <= len - 1; j++) {
//     jWord = jWord - "*";
//     console.log(jWord);
//   }
// };

function stars2(n) {
  let word = "";
  let reverseWord = "";
  for (let i = 1; i <= n; i++) {
    word += "*";
    reverseWord += "*";
    console.log(word);
  }

  for (let j = 1; j <= n - 1; j++) {
    reverseWord
    console.log("j", j);
  }
};


stars2(3);