class Car {
    color = "";
    size = "";
    model = "";
    year = "";
    speed = "";
    brand = "";
    
    constructor(color, size, model, year, speed, brand) {
        this.color = color;
        this.size = size;
        this.model = model;
        this.year = year;
        this.speed = speed;
        this.brand = brand;
    }

    up(behavior) {
        console.log(`${this.brand} 가 ${this.speed} 로 속도를 올립니다.`);
    }

    print() {
        console.log(`색상: ${this.color}, 크기: ${this.size}, 모델: ${this.model}, 연식: ${this.year}, 속도: ${this.speed}, 제조회사: ${this.brand}`)
    }
}

let car1 = new Car ('검정', '5인승', 'Y', '2025', '201km/h', '테슬라');
car1.print();
car1.up();
