class ArrayTest {
    #users = [
      {
        id: 1,
        name: "김철수",
        age: 28,
        active: true,
        scores: [90, 85, 88],
        role: "admin",
      },
      {
        id: 2,
        name: "이영희",
        age: 17,
        active: false,
        scores: [70, 75, 95],
        role: "user",
      },
      {
        id: 3,
        name: "박민수",
        age: 34,
        active: true,
        scores: [88, 92, 78],
        role: "user",
      },
      {
        id: 4,
        name: "최지연",
        age: 22,
        active: true,
        scores: [95, 88, 91],
        role: "moderator",
      },
      {
        id: 5,
        name: "정우성",
        age: 45,
        active: false,
        scores: [60, 65, 70],
        role: "user",
      },
    ];
    testFor() {
      let sum = 0;
      for (let i = 0; i < this.#users.length; i++) {
        sum += this.#users[i].age;
        console.log("for : " + JSON.stringify(this.#users[i]));
      }
      console.log(sum);
  
      sum = 0;
      this.#users.forEach((user, ndx) => {
        sum += user.age;
        console.log("forEach : " + JSON.stringify(user));
      });
      console.log(sum);
    }
    printNameAgeWithActiveTrue() {
      // for (let n = 0; n < this.#users.length; n++) {
      for (const node of this.#users) {
        // if (this.#users[n].active === true) {
        if (node.active === true) {
          console.log(
            `printNameAgeWithActiveTrue for : ${node.name}, ${node.age}`
          );
        }
      }
  
      this.#users.forEach((user, ndx) => {
        if (user.active === true) {
          if (user.active === true) {
            console.log(
              `printNameAgeWithActiveTrue forEach : ${user.name}, ${user.age}`
            );
          }
        }
      });
    }
    printNameScoresRoleEqualUser() {
      // for of 로 배열 요소를 user.role 이 "user" 인것을 찾아서 출력한다.
      // 배열의 forEach 함수로 배열 요소를 user.role 이 "user" 인것을 찾아서 출력한다.
    }
    testMap() {
      // 이름만 추출
      let arr1 = this.#users.map((u) => u.name);
      console.log(arr1);
      // → ["김철수", "이영희", "박민수", "최지연", "정우성"]
  
      // 나이를 1살씩 더해서 새 객체 만들기
      let arr2 = this.#users.map((u) => ({ ...u, age: u.age + 1 }));
      console.log(arr2);
  
      console.log(this.#users);
    }
    testMap3() {
      console.log("문제3");
      // 문제3
      // this.#users 배열의 모든원소에서 원소의 이름과 active [{name:"홍길동", active:true}, {name, active}, {name, active}, ...]를 새로운 배열로 추출하세요. 출력
      let arr1 = this.#users.map((u) => {
        return {name:u.name, active:u.active};
      });
      console.log(arr1);
  
      // this.#users 배열의 모든원소에서 [{ 기존 속성은 그대로, sum : scores 의 총합}, { 기존 속성은 그대로, sum : scores 의 총합}, { 기존 속성은 그대로, sum : scores 의 총합}, ... ] 을 새로운 배열로 추출하세요. 출력
      let arr2 = this.#users.map((u) => {
        let sumScores = 0;
        u.scores.forEach((x) =>{
          sumScores += x;
        });
        return { ...u, sum: sumScores };
      });
      console.log(arr2);
    }
    testMap4() {
      // 문제4
      console.log("문제4");
      // this.#users 배열의 모든원소에서 role 속성의 값 "user"/"admin" 을 원소로 하는 ["user", "admin", ...] 배열을 추출하고 출력.
      let arr4 = this.#users.map((u) => u.role);
      console.log(arr4);
      // this.#users 배열의 모든원소에서 {id: ?, name: "???", age: ?,} 을 원소로 하는 [{}, {}, {}, ...] 새로운 배열을 추출하고 출력.
      let arr5 = this.#users.map((u) => {
        return {id:u.id, name:u.name, age:u.age};
      });
      console.log(arr5);
    }

    testMap5() {
        let array05 = ["홍길동", "이순신", "신사임당", "Micheal Jackon", "을지문덕"];
        console.log(array05.length);
        console.log("신사임당".length);
        // 문제5
        // array05 배열을 이용하여 [{name:"홍길동", len:3}, ...., {name:"Micheal Jackon", len:14}, {name:"을지문덕", len:4}]
        // {name:문자열값, len:문자열값의길이} 원소의 배열로 추출하고 출력
        let newArray = array05.map(
          (item) => {
            return {name:item, len:item.length};
          }
        );
        console.log(newArray);
      }

    textFilter2() {
        console.log("testFilter2");
        // 문제6
        // this.#users 배열의 원소들 중에서 active 가 true 이고 나이가 25살 이상인 객체를 새로운 배열에 추출해서 출력.
        let arr1 = this.#users.filter(u => u.active & u.age >= 25);
        console.log(arr1);
        // this.#users 배열의 원소들 중에서 scores 점수 평균이 90점 이상인 객체를 새로운 배열에 추출해서 출력
        let arr7 = this.#users.filter(u => {
            // 1. 해당 유저의 scores 배열 합계 계산
            const sum = u.scores.reduce((acc, curr) => acc + curr, 0);
            // 2. 평균 계산 (과목 수가 다를 수 있으므로 u.scores.length로 나누기)
            const average = sum / u.scores.length;
            // 3. 90점 이상인 경우만 true 반환
            return average >= 90;
        });
        console.log(arr7);
    
        
        };
        
  }
  
  let at = new ArrayTest();
  at.testFor();
  ["a", "b", "cd", "ef"].forEach((x) => console.log(x));
  
  // 문제1 : active 가 true 인 user 의 이름과 나이를 출력하세요.
  at.printNameAgeWithActiveTrue();
  
  // 문제2 : role 이 "user" 인 user 의 이름과 scores 를 출력하세요.
  at.printNameScoresRoleEqualUser();
  
  at.testMap();
  
  at.testMap3();
  
  at.testMap4();

  at.testMap5();

  at.textFilter2();