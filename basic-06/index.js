// 1.6 編寫一個名為findSmallCount的函式，其參數為一個整數的array以及另一個整數，功能是回傳一個整數，來表示array中有多少元素小於第二個參數。

// 回傳一個整數，此整數用來表示arr中有多少元素小於第二個參數
function findSmallCount(arr, num) {
  let count = 0;

  // 用迴圈跟 array.slice 來取出陣列中的每個值，與參數 num 做比較
  for (let i = 0; i < arr.length; i++) {
    // q fix ver
    // const compare = arr.slice(i, i + 1); // 迴圈回傳陣列 index 對應之值
    if (arr[i] < num) {
      // 若取出值 < 參數 num, count + 1
      count++;
    }
  }
  // 完成迴圈後回傳 count
  return count;
};

let result = findSmallCount([1, 3, 5], 2); // 3
// let result = findSmallCount([1, 2, 3, 4, 5], 0); // 0
console.log(result);