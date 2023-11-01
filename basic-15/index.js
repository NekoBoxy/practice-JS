// 2.5 編寫一個名為pyramid的函式，功能為按以下模式打印出星星層：
// sss*
// ss***
// s*****
// *******

// hint
// for 行
// 	for 顯示s
// 	for 顯示*

// 用迴圈算行數 * 星數
function pyramid(n) {
  let stars = "";
  // n = 1; stars = "*";
  // n = 2; stars = ( " " x 3 ) + ( "**" x 1 )
  // n = 3; stars = ( " " x 2 ) + ( "**" x 2 )
  // n = 4; stars = ( " " x 1 ) + ( "**" x 3 )
  // n = 5; stars = ( " " x 0 ) + ( "**" x 4 )
  for (let i = 1; i <= n; i++) {
    // 最多為 n 行
    if (n === 1) {
      stars = "*";
      console.log(stars);
      break;
    }

    // 算空白， n = 2 ~ 3 
    for (let j = 3; j <= 2; j--) {

    }

    // 算星數，n > 1


  }





  // let stars = "*";
  // if (n === 1) {
  //   console.log(stars);
  // }
  // for (let i = 1; i <= n; i++) {
  //   for (let j = 1; j <= 3; j++) {
  //     stars = " " + stars;
  //     console.log(stars);
  //     // 
  //   }
  //   for (let k = 3; k <= n; k++) {
  //     stars = stars + "**";
  //     console.log(stars);
  //   }
  // }
}

// pyramid(1);
// pyramid(2);
pyramid(3);
// pyramid(4);

// console.log("===========");
// console.log(pyramid(3));