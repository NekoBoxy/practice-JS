// 1.4 編寫一個名為isAllUpperCase的函式，唯一的參數是一個String，其功能為來檢查參數中String的所有字母是否為大寫。
function isAllUpperCase(str) {
  if (!str) return false;
  return str === str.toUpperCase();
};

const result = isAllUpperCase("ABCD");
console.log(result);
