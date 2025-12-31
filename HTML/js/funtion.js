// 함수 선언(Funtion Declaration)

/*
function 함수이름(매개변수 열거) {
	function 이 실행할 문장들;
}
SRP : 단일 책임화 규칙 준수 -> 함수는 한가지 일을 실행해야 하며 여기에만 집중하라, 유지보수, 재사용
*/
function greet(name) {
    return "안녕하세요, " + name + "님!";
    return `안녕하세요, ${name}님!`;
}

console.log(greet("Emily")); // 출력: 안녕하세요, Emily님!

// 호이스팅 - 선언 전에 호출 가능
console.log(add(3, 4)); // 7
function add(a, b) {
    return a + b;
}

// 기본 매개변수, age 매개변수의 값을 기본으로 설정한다. 호출시에 age 가 없으면 기본값을 사용한다.
function introduce(name, age = 20) {
    return `${name}(${age}세)`;
}

console.log(introduce("영희"));        // "영희(20세)"
console.log(introduce("영희", 25));    // "영희(25세)"

// 나머지 매개변수 (Rest Parameters), 맨마지막에 선언해야 한다. 실매개변수들을 배열로 처리
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// 함수 표현식 (Funtion Expression)

// 익명 함수 표현식
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(4, 5)); // 20

// 기명 함수 표현식
const factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1); // 재귀 호출
};
console.log(factorial(5)); // 120

// 함수 표현식은 호이스팅 안 됨
// console.log(subtract(10, 5)); // 오류!
const subtract = function(a, b) {
    return a - b;
};

// 화살표 함수 (Arrow Function)

// 기본 화살표 함수
const multiply2 = (x, y) => {
    return x * y;
};
console.log(multiply2(4, 2)); // 출력: 8

// 간결한 표현 (한 줄일 때 중괄호와 return 생략 가능)
const square = x => x * x;
const add2 = (a, b) => a + b;

console.log(square(5));   // 25
console.log(add2(3, 7));   // 10

// 매개변수가 없을 때
const getRandomNumber = () => Math.random();

// 객체 반환 시 괄호 필요
const createPerson = (name, age) => ({ name, age });
console.log(createPerson("민수", 30)); // { name: "민수", age: 30 }

// 화살표 함수와 일반 함수의 차이 - this 바인딩
const obj = {
    name2: "객체",
    regular: function() {
        console.log(this.name2); // "객체"
    },
    arrow: () => {
        console.log(this.name2); // undefined (상위 스코프의 this)
    }
};

obj.regular(); // "객체"
obj.arrow();   // undefined

// 배열 메서드에서 유용함
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
console.log(doubled); // [2, 4, 6, 8, 10]
console.log(evens);   // [2, 4]
