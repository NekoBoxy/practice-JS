# 說明
## 題目：
## hint
for 行
	for 顯示s
	for 顯示*

是等差級數
例如
{a, a+d, a+2d, a+3d, ..., a+(n-1)*d}
可套用公式為
An = A1 + (n-1)*d
第 n 個值為 A1 + (n-1)*d
d 為公差

## 補充：function 的 return
```
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
1
2
3
===========
1
2
3
undefined

因為 pyramid(3) 或 pyramid(n) 沒有 return 任何東西，函式本身預設的回傳值為空，原本的寫法等同下方 code
```
function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
  return;
}
```