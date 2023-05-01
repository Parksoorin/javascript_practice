// Objects
// object = { key : value };

// 1. Literals and properties
const obj1 = {};
const obj2 = new Object();

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4};
print(ellie);

ellie.hasJob = true;  // 중간에 추가 가능. 하지만 유지보수 힘듦, 에러 발생 가능
console.log(ellie.hasJob);

delete ellie.hasJob;  // 삭제도 가능
console.log(ellie.hasJob);  // undefined

// 2. Computed properties : 계산된 
// key should be always string
console.log(ellie.name);  // 보통 . 을 사용, key의 값을 가져오고 싶으면 밑을 사용
console.log(ellie['name']);  // 두가지 가능
ellie['hasJob'] = true;  // 추가 가능
console.log(ellie.hasJob);

function printValue(obj, key){
    // console.log(obj[key]);  // undefined
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('ellie', 30); // 함수를 만들어서 생성
console.log(person4);

// 4. Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 5. in operator: property existence check (key in obj)
// object 안에 있는지 없는지 확인
console.log('name' in ellie);  // true
console.log('age' in ellie);  // true
console.log('random' in ellie);  // false
console.log(ellie.random);  // 정의하지 않은 것 출력 // undefined

// 6. for..in vs for..of
// for (key in obj)
console.clear(); // 이전 것들이 다 지워짐.
for (key in ellie){
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for(value of array){
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20'};
const user2 = user;
// user2.name = 'coder';
console.log(user); // {name: 'coder', age: '20'}

// old way
const user3 = {};
for (key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = {};
Object.assign(user4, user);
// const user4 = Object.assign({}, user); // 위와 같음
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);  // blue 뒤가 앞의 값을 덮어씌움. 
console.log(mixed.size); // big
