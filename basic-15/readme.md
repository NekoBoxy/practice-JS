# 說明
## 題目：
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

因為 pyramid(3) 沒有 return 任何東西，預設的回傳值為空，如下
```
function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
  return;
}
```