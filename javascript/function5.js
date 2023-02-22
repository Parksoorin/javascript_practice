// Function

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, ceatePoint
// function is object in JS
function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('Hello@');
log(1234);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed bu reference
function changeName(obj){
    obj.name = 'coder';
}
const ellie = { neme: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){ // form이 입력받지 못하면 unknown으로 대체
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args){  // ...은 배열 형태
    // 밑에 세개 모두 출력 같음.
    for(let i=0; i<args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global';  // global variable
function printMessage(){
    let message = 'hello';
    console.log(message);  // local variable
    console.log(globalMessage);
}
printMessage();

// 6. Return a value
function sum(a, b){
    return a + b;
}
const result = sum(1, 2);  // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user){
    if (user.point > 10){
        // long upgrade logic...
        // if와 else를 쓰는 것은 비추
    }
}
function upgradeUser(user){
    if (user.point <= 10){
        return; // 빨리 리턴을 하고 필요한거를 그 뒤에 보내는것이 좋음.
    }
    // long upgarade logic...
}


// ----------------------------------------------------------------
// 1. Function expression
const print = function () { // anonymous function : 이름이 없는 함수
    console.log('print');
};
print();  // print
const printAgain = print;
printAgain();  // print
const sumAgain = sum;
console.log(sumAgain(1, 3));  // 4

// 2. Callback function using function experession
function randomQuiz(answer, printYes, printNo){
    if (answer === 'love you'){
        printYes();
    } else {
        printNo();
    }
}
const printYes = function (){
    console.log('yes!');
}
const printNo = function print(){
    console.log('no!');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
const simplePrint = function (){
    console.log('simplePrint!');
} // 위를 아래로 표현 가능.
const simplePrint2 = () => console.log('simplePrint!');
const add = (a, b) => a + b;

