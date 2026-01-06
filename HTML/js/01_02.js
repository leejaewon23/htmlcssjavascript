/*
과제 1.
  - 이름과 생년월일과 출생국가, 출생도시, 이메일
    , 폰연락처가 있는 사람 클래스 Person 를 만드세요.
  - 이름과 생년월일, 출생국가, 출생도시는
    외부에서 수정 기능 못하며, 읽는 기능만 가능해요.
  - 이메일과 폰연락처는 읽는기능과 쓰는기능으로 처리해요.
*/
/*
과제 1 테스트
  - 이름 읽는 기능함수 : getName();
  - 생년월일 읽는 기능함수 : getBirth();
  - 출생국가 읽는 기능함수 : getBirthCountry();
  - 출생도시 읽는 기능함수 : getBirthCity();
  - 이메일 읽는 기능함수 : getEmail();
  - 폰연락처 읽는 기능함수 : getPhone();
  - 이메일 쓰는 기능함수 : setEmail("abc@gmail.com");
  - 폰연락처 쓰는 기능함수 : setPhone("101-1111-1111");

  - 객체.이름 = "값이 써지면 안됨";
  - 객체.생년월일 = "값이 써지면 안됨";
  - 객체.출생국가 = "값이 써지면 안됨";
  - 객체.출생도시 = "값이 써지면 안됨";
*/

class Person {
  #name = "";
  #birth = "";
  #country = "";
  #city = "";
  email = "";
  phone = "";

  print() {
    //   let msg = "이름 : " + this.getName() +  ", 생일 : " + this.getBirth() + ", 국가 : " + this.getBirthCountry()
    // + ", 도시 : " + this.getBirthCity() + ", ema : " + this.getEmail() + ", 폰번 : " + this.getPhone();
    let msg = `name: ${this.#name}, birth: ${this.#birth}, country: ${
      this.#country
    }, city: ${this.#city}, email: ${this.email}, phone: ${this.phone}`;
    console.log(msg);
    return msg;
  }

  constructor(name, birth, country, city, email, phone) {
    this.#name = name;
    this.#birth = birth;
    this.#country = country;
    this.#city = city;
    this.email = email;
    this.phone = phone;
  }

  getName() {
    return this.#name;
  }
  getBirth() {
    return this.#birth;
  }
  getBirthCountry() {
    return this.#country;
  }
  getBirthCity() {
    return this.#city;
  }
  getEmail() {
    return this.email;
  }
  getPhone() {
    return this.phone;
  }
  setEmail(email) {
    this.email = email;
  }
  setPhone(phone) {
    this.phone = phone;
  }

  static type = "사람";
  static output() {
    // console.log("나는 " + Person.type + " 입니다.");
    console.log(`나는 ${Person.type} 입니다.`);
  }

  static outputInfo(person) {
    console.log("사람 정보 : " + person.print());
  }
}

// 객체 생성
let p1 = new Person(
  "홍길동",
  "1731-12-22",
  "조선",
  "강릉",
  "그게뭔데",
  "그게뭔데"
);
let p2 = new Person(
  "최원철",
  "1970-01-01",
  "대한민국",
  "대도시",
  "ccc@gmail.com",
  "010-1111-2222"
);
let p3 = new Person(
  "Michael Jackson",
  "1965-01-01",
  "USA",
  "New York",
  "mjack@gmailc.om",
  "01-111-1111-1111"
);

// 객체 읽는 기능
console.log(`p1.getName = ${p1.getName()}`);
console.log(`p1.getBirth = ${p1.getBirth()}`);
console.log(`p1.getBirthCountry = ${p1.getBirthCountry()}`);
console.log(`p1.getBirthCity = ${p1.getBirthCity()}`);
console.log(`p1.getEmail = ${p1.getEmail()}`);
console.log(`p1.getPhone = ${p1.getPhone()}`);

console.log(`p2.getName = ${p2.getName()}`);
console.log(`p2.getBirth = ${p2.getBirth()}`);
console.log(`p2.getBirthCountry = ${p2.getBirthCountry()}`);
console.log(`p2.getBirthCity = ${p2.getBirthCity()}`);
console.log(`p2.getEmail = ${p2.getEmail()}`);
console.log(`p2.getPhone = ${p2.getPhone()}`);

console.log(`p3.getName = ${p3.getName()}`);
console.log(`p3.getBirth = ${p3.getBirth()}`);
console.log(`p3.getBirthCountry = ${p3.getBirthCountry()}`);
console.log(`p3.getBirthCity = ${p3.getBirthCity()}`);
console.log(`p3.getEmail = ${p3.getEmail()}`);
console.log(`p3.getPhone = ${p3.getPhone()}`);

// 객체 쓰는 기능
p1.setEmail("u111@gmail.com");
p1.setPhone("010-7777-8888");
console.log(`쓰고 나서 p1.getEmail = ${p1.getEmail()}`);
console.log(`쓰고 나서 p1.getPhone = ${p1.getPhone()}`);

p2.setEmail("u222@gmail.com");
p2.setPhone("010-2222-4444");
console.log(`쓰고 나서 p2.getEmail = ${p2.getEmail()}`);
console.log(`쓰고 나서 p2.getPhone = ${p2.getPhone()}`);

p3.setEmail("u333@gmail.com");
p3.setPhone("010-3333-6666");
console.log(`쓰고 나서 p3.getEmail = ${p3.getEmail()}`);
console.log(`쓰고 나서 p3.getPhone = ${p3.getPhone()}`);

// 멤버변수에 값이 써지면 안됨
p1.name = "값이 써지면 안됨";
p1.birth = "값이 써지면 안됨";
p1.country = "값이 써지면 안됨";
p1.city = "값이 써지면 안됨";
console.log(`써지는 안되는데 값을 쓴 후에는 p1.getName = ${p1.getName()}`);
console.log(`써지는 안되는데 값을 쓴 후에는 p1.getBirth = ${p1.getBirth()}`);
console.log(
  `써지는 안되는데 값을 쓴 후에는 p1.getBirthCountry = ${p1.getBirthCountry()}`
);
console.log(
  `써지는 안되는데 값을 쓴 후에는 p1.getBirthCity = ${p1.getBirthCity()}`
);

p2.name = "값이 써지면 안됨";
p2.birth = "값이 써지면 안됨";
p2.country = "값이 써지면 안됨";
p2.city = "값이 써지면 안됨";
console.log(`써지는 안되는데 값을 쓴 후에는 p2.getName = ${p2.getName()}`);
console.log(`써지는 안되는데 값을 쓴 후에는 p2.getBirth = ${p2.getBirth()}`);
console.log(
  `써지는 안되는데 값을 쓴 후에는 p2.getBirthCountry = ${p2.getBirthCountry()}`
);
console.log(
  `써지는 안되는데 값을 쓴 후에는 p2.getBirthCity = ${p2.getBirthCity()}`
);

p3.name = "값이 써지면 안됨";
p3.birth = "값이 써지면 안됨";
p3.country = "값이 써지면 안됨";
p3.city = "값이 써지면 안됨";
console.log(`써지는 안되는데 값을 쓴 후에는 p3.getName = ${p3.getName()}`);
console.log(`써지는 안되는데 값을 쓴 후에는 p3.getBirth = ${p3.getBirth()}`);
console.log(
  `써지는 안되는데 값을 쓴 후에는 p3.getBirthCountry = ${p3.getBirthCountry()}`
);
console.log(
  `써지는 안되는데 값을 쓴 후에는 p3.getBirthCity = ${p3.getBirthCity()}`
);

/*
오후 과제 2.
  - Person 클래스가 객체로 됐을때 객체의 속성들
    (이름,생년월일,등..)을 출력하는 기능이 필요합니다.
	  멤버메소드 print(); 를 만들어서 console.log 에 출력하는 기능을
	  만드세요.
  - 클래스정적변수 type 에는 "사람"이라는 값을 가지도록
    만드세요
  - 클래스정적메소드 output() 에는 "나는 사람 입니다."를
	  출력하도록 만드세요
  - 클래스정적메소드 outputInfo(person) 에는
    "사람 정보 : " + print() 내용을 연결해서 출력하세요.
*/

p1.print();
p2.print();
p3.print();

Person.output();

Person.outputInfo(p1);

/*
자습문제 : img 폴더에 있는 car_class.png, dog_class.png, human_class.png 파일을 보고 javascript 에서 클래스로 만드는 연습을 하세요
오후 문제 3.
  Person 클래스를 상속받는 자식 클래스 Student 를 만든다.
  Student 에는 학교이름, 학번 속성 2개를 만든다.
  let stu01 = new Student(이름, 생일, 국가, 도시, 이메일, 폰번, 학교이름, 학번); 생성하도록 한다.
  stu01.print(); 하면 기존의 이름,생일 등등 정보가 출력되는데 그 뒤로 학교이름과 학번도 출력하도록 만든다.
*/

class Student extends Person {
    schoolname = "";
    schoolnumber = "";

    constructor(name, birth, country, city, email, phone, schoolname, schoolnumber) {
        super(name, birth, country, city, email, phone);
        this.schoolname = schoolname;
        this.schoolnumber = schoolnumber;
    }

    print() {
        super.print();
        console.log(`학교이름: ${this.schoolname}, 학번: ${this.schoolnumber}`);
    }
}

let stu01 = new Student('이재원', '2003-08-21', '한국', '의정부', 'sosekee1110@naver.com', '010-4102-7905', '명지전문대', '2022261050');
stu01.print();