# 說明
## 題目：
2.5 編寫一個名為pyramid的函式，功能為按以下模式打印出星星層：
```javascript
pyramid(1);
// *

pyramid(2);
// s*
// ***

pyramid(4);
// sss*
// ss***
// s*****
// *******

// n = 4
// sss*
// ss***
// s*****
// *******
```

## hint
```
for (行){
	for 顯示s
	for 顯示*
}  
```

是等差級數
例如
`{a, a+d, a+2d, a+3d, ..., a+(n-1)*d}`  
可套用公式為：`An = A1 + (n-1)*d`；  
第 n 個值為 `A1 + (n-1)*d`，  
d 為公差

## 補充：function 的 return
```javascript
function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

pyramid(3);
console.log("===========");
console.log(pyramid(3));
```

結果會是這樣
```javascript
1
2
3
===========
1
2
3
undefined
```

因為 pyramid(3) 或 pyramid(n) 沒有 return 任何東西，函式本身預設的回傳值為空，原本的寫法等同下方 code
```javascript
function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
  return;
}
```

## 補充：行列式的概念
- 行? 直的都是行，column
- 列? 橫的都是列，row
- 表格最上方橫向的標頭，亦為每行的開頭
- 常見名稱：行列、欄列

### 二維陣列?
行列式本身就是二維陣列。
二維指的是有"兩"層。

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
```

以上方的二維陣列來說：<br>
第一層 `[ ]` 是整個陣列的外框，<br>
第二層 `[ ]` 是這個陣列裡的陣列(們)。<br>

不論第二層陣列的數量多或少，都不影響它是二維陣列的事實。除非第二層陣列的內層還有陣列，或者更多更深層，就會變成 n 維陣列。

### 二維陣列與 JS 的 for 迴圈
for 迴圈也可以用來表示/解二維陣列。<br>
以前面提到的二維陣列來說，想得到 6 這個值，在 JS 中要怎麼做呢?

首先要先找到 6 存在的陣列：`matrix[1] = [4, 5, 6]`，<br>
再從這個陣列中指定 6 的位置：`matrix[1][1] = 6`<br>
醬子就完成惹~

### 延伸概念
```javascript
const matrix = [
  [1, 2, 3], // 第一列
  [4, 5, 6]  // 第二列
];
```

如果要用迴圈顯示二維陣列中的值，例如 `123456`，該怎麼寫呢?

```javascript
// 外層迴圈數代表 這個二維陣列有幾層/列
for(let i = 0; i < 2; i++) {
  // 內層迴圈數代表 每層陣列內的項目總數
  for(let j = 0; j < 3; j++) {
    console.log(a[i][j]);
  }
}
```

外層迴圈數：這個二維陣列有幾層/行/row <br>
內層迴圈數：每層陣列內的項目總數/column <br>
大概 4 這樣。