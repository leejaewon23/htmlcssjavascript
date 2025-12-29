let d;
var a = 10;
let b = 20;
let userName = "Alice";
const c = 30, PI = 3.14159;

b = 200;
userName = "Bob";

try {
c = 300;
PI = 3.14;
} catch (e) {
    console.log('에러 발생')
}

// const 객체는 내부 값 변경 가능
const user = { name: "Tom" };
user .name = "Jerry";
d = 700;

const obj1 = new Object();
const arr1 = [1, 2, 3, 4, 5, 6, "a", "b"];
const func1 = function() {
    alert('aaaaa');
};

func1();

let c1 = 10;
c1 -= 5;
console.log(c1);
console.log(c1++);
console.log(++c1);
console.log(--c1);
console.log(c1--);

console.log(d++ / 100 * b - ++c1);
console.log(c1);
console.log(d);

let user1 = null;
let defaultUser = user1 || "게스트1"; // user1 값이 null이기 때문에 게스트1이 들어감 (or 연산자)
let validUser = user1 && user1.name; // null (and 연산자)
console.log(defaultUser)
console.log(validUser)

let v1 = 20 + 10 / 5;
console.log(v1);

let v2 = 50;
v2 += 10;
console.log(v2);

let v3 = 20 < 30;
console.log(v3);

let v4 = null;
let v5 = 40;
let totall = v4 && v5
console.log(totall)

// 삼항 연산자
// (조건) ? (조건이 참일 때) : (조건이 거짓일 때)