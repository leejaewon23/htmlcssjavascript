/*
1단계 : 구구단 2단 출력
printGuGuDan2() { 
  2 * 1 = 2
  2 * 2 = 4
  ......
  2 * 8 = 16
  2 * 9 = 18
}



2단계 : callback 사용
doGuGuDan(printGuGuDan2); printGuGuDan2를 CallBack 실행
functoin doGuGuDan(callback) {
  setTimeout(구구단출력기능, 2초이후실행);
}

3단계 : Promise 사용
doGuGuDanPromise();
functoin doGuGuDanPromise() {
  return new Promise();
}

doGuGuDanPromise()
  .then(function() {
    console.log("성공");
  });

4단계 : async/await 사용

doGuGuDanAsyncAwait();
a... function doGuGuDanAsyncAwait() {
  a... doGuGuDanPromise();
  console.log("성공");
}
 */
function doGuGuDan() {
  for (let GuGudan = 2; GuGudan <= 9; GuGudan++) {
    console.log(`\n${GuGudan} 단:`);
    for (let num = 1; num <= 9; num++) {
      console.log(`${GuGudan} x ${num} = ${GuGudan * num}`);
    }
  }
}
//doGuGuDan();//

function gugudan(callback) {
  console.log("구구단 시작");
  setTimeout(() => {
    console.log("구구단 출력");
    callback();
  }, 2000);
}
//GuGudan(doGuGuDan);//
gugudan(() => {
  doGuGuDan();
});

function doGuGuDan_Promise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

doGuGuDan_Promise()
.then(function () {
  console.log("성공");
});

function doGuGuDan_Async() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

function final_Async() {
  console.log("성공");
}

async function runAsyncProcess() {
  try {
    await doGuGuDan_Async();

    final_Async();
  } catch (error) {
    console.error("오류 발생");
  }
}

runAsyncProcess();