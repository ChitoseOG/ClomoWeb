var timerId;
 
// ボックスを表示して、タイマーを開始
   document.getElementById("temporaryBox").style.display = "block"; // ボックスを表示
   timerId = setTimeout( closeBox , 2000 ); // タイマーを開始

 
// ボックスを消して、タイマーを終了
   document.getElementById("temporaryBox").style.display = "none"; // ボックスを消す
   clearTimeout( timerId ); // タイマーを終了
