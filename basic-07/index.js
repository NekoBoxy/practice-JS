// 1.7 編寫一個名為findSmallerTotal的函式，其參數為一個整數的array以及另一個整數，回傳值為array中小於第二個參數的所有元素的總和。

function findSmallCount(arr, num) {
  let count = 0;

  // 用迴圈取出陣列中的每個值，並與參數 num 做比較
  for (let i = 0; i < arr.length; i++) {
    // 如果用原本的 slice 切，得到的會是 obj,這樣就不能用 count 來計算總和了
    // 因限制可用的方法，故捨棄 slice
    const compare = arr[i]; // typeof compare 為 number
    if (compare < num) {
      // 若取出值 < 參數 num, 疊加進 count
      count = count + compare;
    }
  }
  // 完成迴圈後回傳 count
  return count;
};

// let result = findSmallCount([1, 3, 5], 8); // 9
let result = findSmallCount([1, 2, 3, 4, 5], 0); // 0
console.log(result);