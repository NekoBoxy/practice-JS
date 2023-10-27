// 1.5 編寫一個名為position的函式，唯一的參數是一個String，其功能為找到參數String當中的第一個大寫字母，並且回傳大寫字母的值以及其index位置。


// 對傳回來的字串用 for 迴圈一個個拆開比對
// 比對到第一個大寫字母就回傳值與 index，並中止迴圈
// 完全比對失敗則回傳 -1
function position(str) {
  let result = -1;

  for (let i = 0; i < str.length; i++) {
    // 若沒給值就中止迴圈
    if (!str) break;
    if (str[i] === str[i].toUpperCase()) {
      // 若都是大寫，回傳值與 index 並跳出迴圈
      const value = str[i];
      const index = i;
      console.log(value, index);
      break;
    }

    // 若比對到迴圈的最後一圈，回傳結果
    if (i === str.length) {
      console.log(result)
    }
  }
};

// position("Abc"); // A 0
position("abc");
// position("Abc");