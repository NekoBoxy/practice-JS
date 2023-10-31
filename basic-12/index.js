// 2.2 編寫一個名為swap的函式，參數為一個String，回傳值為大小寫反轉的String。
// ps 題目忘記開放 string.toLowerCase() XD

function swap(str) {
  let newWord = "";

  for (let i = 0; i < str.length; i++) {
    // 用 if 比較
    // str[i] = str[i].toUpperCase 時，str[i] 為大寫
    // str[i] ≠ str[i].toUpperCase 時，str[i] 為小寫
    // 大寫時反轉為小寫
    if (str[i] === str[i].toUpperCase()) {
      newWord = newWord + str[i].toLowerCase();
    } else {
      // 小寫時反轉為大寫
      newWord = newWord + str[i].toUpperCase();
    }
  }

  return newWord;
}

const string = "QQBoxy";
const result = swap(string);
console.log(result);