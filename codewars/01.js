// question from codewar
function sumArray(array) {
  // 若陣列為空或只有一個值，回傳 0
  if (!array.length) {
    return 0;
  }

  if (array.length <= 1) {
    return 0;
  }

  if (array[0] === null) {
    return 0;
  }

  // 因為 sort 會更動原陣列，所以新增個變數來修改
  let newArr = [...array];
  let sum = 0;

  // 排序，由小至大
  newArr.sort(function (a, b) {
    // 因為是數值，以 a,b 兩值相減會得到升冪排列的陣列
    return a - b;
  });
  // 得到新陣列後，忽略首尾數字，將其他數值相加並回傳
  // 注意迴圈次數的 "大/小於" 方向
  for (let i = 0; i < newArr.length; i++) {
    sum = sum + newArr[i];
  }

  return sum;
}

const arr = [6, 2, 1, 8, 10];

let result = sumArray(arr);

console.log(result);
// console.log(arr); // 原陣列不會被更動