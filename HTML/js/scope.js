// 전역 스코프에 선언된 변수
var globalVar = "전역 var 변수";
let globalLet = "전역 let 변수";
const globalConst = "전역 const 상수";

function testGlobalScope() {
    console.log(globalVar);    // 접근 가능
    console.log(globalLet);    // 접근 가능
    console.log(globalConst);  // 접근 가능
}

testGlobalScope();

// 블록 내부에서도 접근 가능
if (true) {
    console.log(globalVar);    // 접근 가능
    console.log(globalLet);    // 접근 가능
    console.log(globalConst);  // 접근 가능
}

// 다른 함수에서도 접근 가능
function anotherFunction() {
    console.log(globalVar);    // 접근 가능
}

// 브라우저 환경에서 전역 객체는 window
var browserGlobal = "브라우저 전역";
console.log(window.browserGlobal); // "브라우저 전역"

// let과 const는 전역 객체의 속성이 되지 않음
let modernGlobal = "모던 전역";
console.log(window.modernGlobal);  // undefined

// 암묵적 전역 (선언 없이 할당)
function createImplicitGlobal() {
    implicitGlobal = "암묵적 전역"; // var, let, const 없이 할당
}

createImplicitGlobal();
console.log(implicitGlobal);       // "암묵적 전역" (안티패턴!)
console.log(window.implicitGlobal); // "암묵적 전역"

// 전역 스코프
const globalVar1 = "전역 변수";

function outerFunction() {
    // 함수 스코프
    const functionVar = "함수 변수";
    
    if (true) {
        // 블록 스코프
        let blockVar = "블록 변수";
        const blockConst = "블록 상수";
        var functionScopedVar = "var는 함수 스코프";
        
        console.log("if:"+globalVar);    // 접근 가능
        console.log("if:"+functionVar);  // 접근 가능
        console.log("if:"+blockVar);     // 접근 가능
        console.log("if:"+blockConst);   // 접근 가능
        console.log("if:"+functionScopedVar);     // 접근 가능
    }
    
    console.log("func:"+globalVar);           // 접근 가능
    console.log("func:"+functionVar);         // 접근 가능
    // console.log("func:"+blockVar);         // 오류! 블록 밖에서 접근 불가
    // console.log("func:"+blockConst);       // 오류! 블록 밖에서 접근 불가
    console.log("func:"+functionScopedVar);   // 접근 가능 (var는 함수 스코프)
}
outerFunction();
console.log("gl:"+globalVar);    // 접근 가능
// console.log("gl:"+functionVar);  // 오류! 블록 밖에서 접근 불가
// console.log("gl:"+blockVar);     // 오류! 블록 밖에서 접근 불가
// console.log("gl:"+blockConst);   // 오류! 블록 밖에서 접근 불가
// console.log("gl:"+functionScopedVar);     // 오류! 블록 밖에서 접근 불가


// 중첩 함수의 스코프
function outer() {
    let outerVar = "외부 함수";
    
    function inner() {
        let innerVar = "내부 함수";
        console.log(outerVar); // 접근 가능 (상위 스코프)
        console.log(innerVar); // 접근 가능
    }
    
    inner();
    // console.log(innerVar); // ReferenceError
}
outer();


// 매개변수도 지역 스코프
function greet(name) { // 매개변수 name 은 함수 스코프
    let greeting = "안녕하세요";
    console.log(`${greeting}, ${name}님!`);
}

greet("철수");
// console.log(name);     // ReferenceError
// console.log(greeting); // ReferenceError


const x = 100;  // 전역 변수
function outer() {
    const x = 10;
    function inner() {
        console.log(x); // 10 (정의된 위치의 스코프)
    }
    inner();
}
outer();
console.log(x); // 100 전역 변수

const y = 1;

function foo() {
    const y = 10;
    bar(); // bar는 어디서 호출되든 정의된 위치의 스코프를 따름
}

function bar() {
    console.log(y); // 1 (정의된 위치의 전역 x)
}

foo(); // 1 출력 (10이 아님!)
bar(); // 1 출력
// 설명: bar 함수는 전역에 정의되었으므로,
// foo 내부에서 호출되더라도 전역 스코프의 x를 참조합니다.


const name = "전역 이름";

function outer() {
    const name = "외부 이름";
    // inner는 outer 내부에 정의됨
    function inner() {
        console.log(name); // outer의 name 참조
    }
    return inner;
}

function anotherOuter() {
    const name = "다른 외부 이름";
    const innerFunc = outer(); // outer에서 inner 반환
    innerFunc(); // "외부 이름" 출력
    // inner는 outer에 정의되었으므로 outer의 스코프를 참조
}
anotherOuter();

// 더 명확한 예제
const value = "전역";

function createFunction() {
    const value = "createFunction";
    return function() {
        console.log(value); // "createFunction" (정의된 위치)
    };
}

function executeFunction() {
    const value = "executeFunction";
    const func = createFunction();
    func(); // "createFunction" 출력 (executeFunction이 아님!)
}
executeFunction();

function createUser(name) {
    let visitCount = 0;  // 이 변수는 외부 함수가 종료되어도 내부 함수(클로저)에 의해 기억됨
    
    // 반환 될때 내부 함수는 외부 함수의 지역 변수들을 기억합니다.
    return {
      name,  // 매개변수 스코프
      visit() {
        visitCount++;
        console.log(`${name}의 방문 횟수: ${visitCount}`);
      },
    };
  }
  
  const user1 = createUser("Tom");
  user1.visit(); // Tom의 방문 횟수: 1
  user1.visit(); // Tom의 방문 횟수: 2
  
  const user2 = createUser("Jerry");
  user2.visit(); // Jerry의 방문 횟수: 1
  
  
  function createCounter() {
      let count = 0; // 이 변수는 외부 함수가 종료되어도 내부 함수(클로저)에 의해 기억됨
  
      // 이 내부 함수가 바로 클로저입니다.
      return function() {
          count = count + 1;
          return count;
      };
  }
  
  const counterA = createCounter();
  console.log(counterA()); // 출력: 1
  console.log(counterA()); // 출력: 2
  
  const counterB = createCounter(); // 새로운 독립적인 클로저 환경 생성
  console.log(counterB()); // 출력: 1
  
  
  // 실용적인 클로저 데이터 은닉
  function createBankAccount(initialBalance) {
      let balance = initialBalance; // balance 는 마치 java의 private 변수
      
      return {
          deposit(amount) {
              if (amount > 0) {
                  balance += amount;
                  return `${amount}원 입금됨. 잔액: ${balance}원`;
              }
              return "유효하지 않은 금액입니다.";
          },
          withdraw(amount) {
              if (amount > 0 && amount <= balance) {
                  balance -= amount;
                  return `${amount}원 출금됨. 잔액: ${balance}원`;
              }
              return "출금 불가능합니다.";
          },
          getRemain() {
              return `현재 잔액: ${balance}원`;
          }
      };
  }
  const myAccount = createBankAccount(10000);
  //console.log(myAccount.getBalance());//    // "현재 잔액: 10000원"
  console.log(myAccount.deposit(5000));   // "5000원 입금됨. 잔액: 15000원"
  console.log(myAccount.withdraw(3000));  // "3000원 출금됨. 잔액: 12000원"
  console.log(myAccount.getRemain());     // "현재 잔액: 12000원"
  console.log(myAccount.withdraw(15000)); // "출금 불가능합니다."
  // console.log(myAccount.balance);      // undefined (직접 접근 불가)
  
  // 실용적인 클로저 이벤트 핸들러
  function setupButtons() {
      const buttons = ["버튼1", "버튼2", "버튼3"];
      
      buttons.forEach((buttonName, index) => {
          // 각 버튼은 자신의 index를 기억
          setTimeout(() => {
              console.log(`${buttonName} 클릭됨 (인덱스: ${index})`);
          }, (index + 1) * 1000);
      });
  }
  setupButtons();
  // 1초 후: "버튼1 클릭됨 (인덱스: 0)"
  // 2초 후: "버튼2 클릭됨 (인덱스: 1)"
  // 3초 후: "버튼3 클릭됨 (인덱스: 2)"
  
  
  // 클로저 주의사항: 반복문에서의 클로저 (var 를 사용하면 안됨)
  // 잘못된 예
  function createFunctionsFailuire() {
      const functions = [];
      
      for (var i = 0; i < 3; i++) {
          functions.push(function() {
              console.log(i); // var는 함수 스코프라서 모두 3
          });
      }
      
      return functions;
  }
  
  const funcs = createFunctionsFailuire();
  funcs[0](); // 3
  funcs[1](); // 3
  funcs[2](); // 3
  
  // 올바른 예 1: let 사용
  function createFunctionsCorrect1() {
      const functions = [];
      
      for (let i = 0; i < 3; i++) { // let은 블록 스코프
          functions.push(function() {
              console.log(i);
          });
      }
      
      return functions;
  }
  
  const correctFuncs1 = createFunctionsCorrect1();
  correctFuncs1[0](); // 0
  correctFuncs1[1](); // 1
  correctFuncs1[2](); // 2
  
  
  // 복잡한 클로저 예제
  function outermost() {
      const outerValue = "가장 바깥";
      
      function middle() {
          const middleValue = "중간";
          
          function innermost() {
              const innermostValue = "가장 안쪽";
              
              // 모든 상위 렉시컬 환경에 접근 가능
              console.log(outerValue);     // "가장 바깥"
              console.log(middleValue);    // "중간"
              console.log(innermostValue); // "가장 안쪽"
          }
          
          return innermost;
      }
      
      return middle;
  }
  
  const middleFunc = outermost();
  const innermostFunc = middleFunc();
  innermostFunc(); // 모든 값 출력 가능 (정적 스코프)
  
  // 예제 설정 관리자
  function createConfigManager() {
      const config = {
          apiUrl: "https://api.example.com",
          timeout: 5000,
          retries: 3
      };
      
      // 반환되는 함수들은 config에 접근 (정적 스코프)
      return {
          getConfig() {
              return { ...config }; // 복사본 반환
          },
          updateConfig(updates) {
              Object.assign(config, updates);
          },
          resetConfig() {
              config.apiUrl = "https://api.example.com";
              config.timeout = 5000;
              config.retries = 3;
          }
      };
  }
  
  const configManager = createConfigManager();
  console.log(configManager.getConfig());
  configManager.updateConfig({ timeout: 10000 });
  console.log(configManager.getConfig());
  
  // 예제 이벤트 핸들러
  function setupEventHandlers(userId) {
      // userId는 이 렉시컬 환경에 속함
      
      const handlers = {
          onClick: function() {
              console.log(`User ${userId} clicked`);
              // userId에 접근 가능 (정적 스코프)
          },
          onHover: function() {
              console.log(`User ${userId} hovered`);
          },
          onSubmit: function() {
              console.log(`User ${userId} submitted`);
          }
      };
      
      return handlers;
  }
  
  const user123Handlers = setupEventHandlers(123);
  user123Handlers.onClick();  // "User 123 clicked"
  user123Handlers.onSubmit(); // "User 123 submitted"
  
  // 예제 함수 팩토리
  function createMultiplier(multiplier) {
      // multiplier는 이 렉시컬 환경에 캡처됨
      
      return function(number) {
          return number * multiplier;
          // multiplier에 접근 가능 (정의된 위치의 스코프)
      };
  }
  
  const double = createMultiplier(2);
  const triple = createMultiplier(3);
  const quadruple = createMultiplier(4);
  
  console.log(double(5));     // 10
  console.log(triple(5));     // 15
  console.log(quadruple(5));  // 20