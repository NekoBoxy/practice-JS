// 1.5 編寫一個名為position的函式，唯一的參數是一個String，其功能為找到參數String當中的第一個大寫字母，並且回傳大寫字母的值以及其index位置。

// 對傳回來的字串用 for 迴圈一個個拆開比對
// 比對到第一個大寫字母就回傳值與 index，並中止迴圈
// 完全比對失敗則回傳 -1
function position(str) {
  if (str === null) return;
  let voc = "";
  let index = -1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      voc = str[i];
      index = i;
      console.log(voc, index);
      return; // 因為只要找第一個，找到目標了就中止迴圈
    }
  }
  console.log(voc, index);
}

// position("Abc"); // A 0
// position("abc"); // -1
// position("aBc"); // B 1
position(""); // -1
