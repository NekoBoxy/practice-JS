// 2.4 回文是指，正著讀或反著讀都一樣的句子。例如:【上海自來水來自海上】是迴文。寫一個名為palindrome的函式，它接受一個String作為參數，回傳值為一個boolean，告訴我們參數是否為回文。

// 將傳入值反轉，再與原值比較，若相同就是回文
function palindrome(str) {
  let newWord = "";

  // 逆向；易讀性差
  // for (let i = str.length - 1; i >= 0; i--) {
  //   // newWord = newWord + str[i];
  //   newWord += str[i];
  // }

  // 順向；易讀性佳
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i]); // 一.隻.海.獺
    // console.log(str[str.length - 1 - i]); // 獺.海.隻.一
    newWord += str[str.length - 1 - i];
  }
  // 一隻海獺
  // 0.1.2.3
  // length:4 - 1 = 3

  return str === newWord;
}

// palindrome("一隻海獺");

console.log(1, palindrome("上海自來水來自海上"));
console.log(2, palindrome("一隻海獺"));
console.log(3, palindrome("上上下下右下下上上"));