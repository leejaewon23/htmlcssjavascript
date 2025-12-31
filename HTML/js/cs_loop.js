//조건문(Conditional Statements)
let pedal = true;
if (pedal === true) {
	  console.log("페달 밟음");
}
/*
if (조건) {
    조건이 참이면 실행
}
*/

let age = 21;
if (age >= 20) {
	  console.log("성인");
} else {
	  console.log("미성년");
}
/*
if (조건) {
    조건이 참이면 실행
} else {
    조건이 거짓이면 실행
}
*/

let score = 85;
if (score >= 90) {
      console.log("A학점");
} else if (score >= 80) {
      console.log("B학점");
} else if (score >= 70) {
      console.log("C학점");
} else {
      console.log("재수강");
}
/*
if (조건1) {
    조건1이 참이면 실행
} else if (조건2) {
    조건2이 참이면 실행
} else if (조건3) {
    조건3이 참이면 실행
} else {
    조건1,2,3 모두 거짓이면 실행
}
if ~ else if ~ else if ~ else if ~ else ~ ==> switch 로 변환이 가능, 불가능도 있음
*/

// switch 문
let fruit = "apple";
switch (fruit) {
    case "apple":
        console.log("사과입니다.");
        break; // break를 사용해야 해당 case만 실행하고 switch 문을 빠져나감
    case "banana":
        console.log("바나나입니다.");
        break;
    default:
        console.log("다른 과일입니다.");
}

let day = 2;
switch (day) {
    case 1: console.log("월요일"); break;
    case 2: console.log("화요일"); break;
    case 3: console.log("수요일"); break;
    case 4: console.log("목요일"); break;
    case 5: console.log("금요일"); break;
    case 6: console.log("토요일"); break;
    case 7: console.log("일요일"); break;
    default: console.log("이상한 요일"); // default는 실행되면 자동으로 빠져나오기 때문에 break 필요 없음
}
/*
switch (변수상태) {
  case (상태의값이 똑같음):
    실행할 문장;
    break;
  case ~~~:
  case ~~~:
  case ~~~:
  default:
    모든 case 가 아닐경우에 실행하는 문장;
}
*/

// 반복문(Loops)
// for 루프: 1부터 5까지 출력
for (let i = 1; i <= 5; i++) {
    console.log("for 반복: " + i); // 1, 2, 3, 4, 5 출력
}
/*
for (시작문; 조건문; 증감문) {
	for 반복실행할 문장들;
}
1. 시작문 실행
2. 조건문이 참인지 판별한다. 참이면 for의 문장을 실행한다. 거짓이면 for 블록을 종료한다.
3. 증감문 실행
2. 조건문이 참인지 판별한다. 참이면 for의 문장을 실행한다. 거짓이면 for 블록을 종료한다.
3. 증감문 실행
2. 조건문이 참인지 판별한다. 참이면 for의 문장을 실행한다. 거짓이면 for 블록을 종료한다.
3. 증감문 실행
4. 조건문이 거짓이어서 for 블록을 종료할때까지 반복한다.
*/

// while 루프: 숫자가 3보다 작은 동안 반복
let count = 0;
while (count < 3) {
    console.log("while 반복: " + count); // 0, 1, 2 출력
    count++;
}

/*
while (조건문) {
  while 의 문장들;
}
1. 조건문이 참인지 판별
2. 조건문이 참이면 while의 문장을 실행한다. 거짓이면 whlie 블록을 종료한다.
1. 조건문이 참인지 판별
2. 조건문이 참이면 while의 문장을 실행한다. 거짓이면 whlie 블록을 종료한다.
1. 조건문이 참인지 판별
2. 조건문이 참이면 while의 문장을 실행한다. 거짓이면 whlie 블록을 종료한다.
*/

// do ~ while 루프: 숫자가 3보다 작은 동안 반복
let count2 = 0;
do {
    console.log("do ~ while 반복: " + count2); // 0, 1, 2 출력
    count2++;
} while (count2 < 3);
/*
do {
  while 의 문장들;
} while (조건문);
1. while의 문장을 실행한다.
2. while의 조건문이 참이면 do 블록을 다시 실행한다. 거짓이면 while 을 종료한다.
1. while의 문장을 실행한다.
2. while의 조건문이 참이면 do 블록을 다시 실행한다. 거짓이면 while 을 종료한다.
1. while의 문장을 실행한다.
2. while의 조건문이 참이면 do 블록을 다시 실행한다. 거짓이면 while 을 종료한다.
*/

// for...of 루프: 배열 요소 반복
const numbers = [10, 20, 30];
for (const num of numbers) {
    console.log("for...of: " + num); // 10, 20, 30 출력
}
/*
for (const 각 원소의 이름 of 배열이름) {
	for 문장들에서는 각 원소의 이름으로 처리한다.
	각원소의이름의 값을 수정해도 실제 배열의 원소 값은 수정이 안된다. 그러므로 let 보다는 const 가 좋다.
}
*/

// for...in : 객체 key 순회
const user = { name: "Tom", age: 25, kor: 88, eng: 85, mat: 81 };
for (const key in user) {
  console.log(key, user[key]);
}
/*
for (const 속성이름키 in 객체이름) {
	for 에서는 객체의 속성들을 속성이름키로 처리할 수 있다.
}
*/

// break와 continue
for (let i = 0; i < 10; i++) {
    if (i === 7) {
      break;    // break; 는 아래 문장들을 실행하지 않고 루프를 종료
    }
    if (i === 3) {
	    continue; // continue 는 아래 문장들을 실행하지 않고 루프를 계속 실행
	  }
    console.log(i); // 0, 1, 2, 4, 5, 6
}

// 중첩 반복문 예제 (구구단)
for (let dan = 2; dan <= 3; dan++) {
    console.log(`\n${dan} 단:`);
    for (let num = 1; num <= 3; num++) {
        console.log(`${dan} x ${num} = ${dan * num}`);
    }
}

