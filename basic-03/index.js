// 1.3 編寫一個名為isUpperCase的函式，唯一的參數是一個String，其功能為來檢查參數中String的第一個字母是否為大寫。
// function isUpperCase(str) {
//   // 先把 str 轉換為全大寫
//   const toUpper = str.toUpperCase();
//   // 使用 if 來檢查 str 與轉換過的 toUpper 的首字是否相同
//   if (str[0] === toUpper[0]) {
//     // str 首字與 toUpper 相同 => 代表都是大寫
//     return true;
//   } else {
//     // str 首字與 toUpper 不同 => 代表一個大寫、一個小寫
//     return false;
//   }
// };

// 限制不可使用 if else
// 發現 str 若沒給值會出錯，只好用 if 來判斷
function isUpperCase(str) {
  if (!str) return false;
  return str[0] === str[0].toUpperCase();
};

// // 臭臭盒說阿獺要練下面這個
const result = isUpperCase("ANN");
console.log(result);

