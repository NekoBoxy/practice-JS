// 2.10
// 在數學上，費波那契數是以遞迴的方法來定義：
// F_0 = 0, F_1 = 1
// F_n = F_{n-1} + F_{n - 2}, n>=2
// 首幾個費波那契數是：
// f0=0、f1=1、f2=1、f3=2、f4=3、f5=5、f6=8、f7=13、f8=21、f9=34、f10=55、f11=89、f12=144、f13=233、f14=377、f15=610、f16=987、…。
// 編寫一個名為 fib 的函式，唯一的參數是個整數 n，回傳值為斐波那契數列的第n項。

// table
// F_n = F_{n-1} + F_{n - 2}
// F0 = 0
// F1 = 1
// f2 = f1 + f0 = 0 + 1 = 1
// f3 = f2 + f1 = 1 + 1 = 2
// f4 = f3 + f2 = 1 + 2 = 3
// f5 = f4 + f3 = 2 + 3 = 5
// f6 = f5 + f4 = 5 + 3 = 8
// f7 = f6 + f5 = 8 + 5 = 13

function fib(n) {
  // 宣告變數，用以存放數值
  let f0 = 0;
  let f1 = 1;
  let fn = 0;

  // 因陣列起始數值固定為 0 與 1
  // n = 0, f0 = 0
  // n = 1, f1 = 1
  // 當 n 為 0 與 1 時，回傳 n 即可
  if (n < 2) {
    return n;
  }

  // 計算從 n = 2 開始的值
  for (let i = 2; i <= n; i++) {
    // 先得到 f2：
    // f2 = f0 + f1
    fn = f0 + f1;

    // 經過一次計算步驟後，觀察 table 上 F_{n-1} 與 F_{n - 2} 的位置
    // f2 = f1 + f0
    // f3 = f2 + f1
    // f4 = f3 + f2

    // 得知 新 fn 的計算為 原本 f1 的位置換成 F_{n-1}，f0 的位置換成 F_{n - 2}
    f0 = f1;
    f1 = fn;
  }
  return fn;
}

const result = fib(11);
console.log(result);