'use strict';
// class: template
// object: instance of a class

// 1. Class declarations
class Person {  // 클래스
    // constructor
    constructor(name, age){  // 생성자
        // fieldes
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {  // 말하는 메소드
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
// 새로 나왔는데 아직 사용은 x
class Experiment {
    publicField = 2;
    #privateField = 0;  // # 붙이면 r,w 불가
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too Soon!
// 새로 나왔는데 아직 사용은 x
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();  // 부모를 호출하면서 재정의한 자신도 호출
        console.log('△');
    }
    getArea() {  // 오버라이딩. 삼각형은 2로 나누어야됨.
        return (this.width * this.height) / 2;
    }
}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf // 좌가 우 클래스에 의해 만들어졌는지 확인 t, f 리턴
console.log(rectangle instanceof Rectangle);  // t
console.log(triangle instanceof Rectangle);  // f
console.log(triangle instanceof Triangle);  // t
console.log(triangle instanceof Shape);  // t
console.log(triangle instanceof Object);  // t (모두 포함됨)
