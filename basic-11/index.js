// 2.1 編寫一個名為reverse的函式，參數為一個String，回傳值為順序反轉的String。

function reverse(str) {
  let reverseStr = "";
  // 先寫一個正向的
  // for (let i = 0; i < str.length; i++) {
  //   reverseStr = reverseStr + str[i];
  //   console.log(reverseStr);
  // }
  // 再寫一個逆向的
  // length 記得扣一
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr = reverseStr + str[i];
  }

  return reverseStr;
}

const input = "HIHI";
const result = reverse(input);
console.log("result", result);