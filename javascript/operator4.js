// 1. String concatenation
console.log('my' + ' cat');  // my cat
console.log('1' + 2);  // 12
console.log(`string literals: 1 + 2 = ${1 + 2}`);  // string literals: 1 + 2 = 3
console.log('ellie\'s \n\tbook');  // 백슬래시 사용.

// 2. Numeric operators
console.log(1 + 1);  // add : 2
console.log(1 - 1);  // substract : 0
console.log(1 / 1);  // divide : 1
console.log(1 * 1);  // multiply : 1
console.log(5 % 2);  // remainder : 1
console.log(2 ** 3);  // exponentiation : 8

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
//위의 코드는 밑의 코드와 같음
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); // preIncrement: 3, counter: 3
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${preIncrement}, counter: ${counter}`); // postIncrement: 3, counter: 4
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`); // preDecrement: 3, counter: 3
const postDecrement = counter--;
console.log(`postDecrement: ${preDecrement}, counter: ${counter}`); // postDecrement: 3, counter: 2

// 4. Assinment operators
let x = 3;
let y = 6;
x += y;  // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than 
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: ||, &&, !
const value1 = false;
const value2 = 4 < 2;
// || 
console.log(`or: ${value1 || value2 || check()}`);
function check(){
    for (let i = 0; i < 10; i++){
        //wasting time
        console.log('☆');
    }
    return true;
}

// 7. Equality
const stringFive = '5';
const numberFive = 5;
// == loose equality, with type conversion 느슨한
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
// strict equality, no type conversion 타입까지 동일하게. strict 사용 권장
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);  // false -> 저장된 위치가 다르기 때문에 
console.log(ellie1 === ellie2);  // false
console.log(ellie1 === ellie3);  // true
console.log('\n');
//equality - puzzler
console.log(0 == false);  // true
console.log(0 === false);  // false
console.log('' == false);  // true
console.log('' === false);  // false
console.log(null == undefined);  // true
console.log(null === undefined);  // false

// 8. Conditional operators: if
// if, else if, else
const name = 'ellie';
if (name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unkwnon');
}

// 9. Ternary operator: ?
// condotion ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type cheecks in TS
const browser = 'IE';
switch (browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}
// do while
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);
// for loop
for (i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}
console.log('\n');
for (let i = 3; i > 0; i = i - 2){  // 지역변수 선언
    console.log(`inline variable for: ${i}`);
}
console.log('\n');
// nested loops
for (let i = 0; i < 3; i++){
    for (let j = 0; j < 3; j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}
// break, continue

