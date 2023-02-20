// 1. use strict
'use strict';  // 제한적.

// 2. Variable, rw(read, write)
// 변수. 변경 될 수 있는 값. 
// let (added in ES6에서 만들어짐.)
let name = 'ellie';  // 블록으로 묶인 경우 블록 밖에서 사용 불가.
console.log(name);  // ellie 출력 후 
name = 'hello';
console.log(name);  // hello 출력. name이 변경됨.
let globalName = 'global name';
console.log(globalName); // 어디에서나 global name이 출력됨. 항상 메모리에 탑재(최소한으로 사용하는 것이 좋음.)
// let을 사용하기 전에 var 사용. var는 값을 선언하기 전에 사용할 수 있다. 순서 뒤죽박죽!
// var는 블록을 무시. 선언을 하지 않아도 {}에 있으면 여기저기 사용이 가능.

// 3. Contants, r(read only)
// 값을 한번 할당하면 절대로 바뀌지 않는 변수
// 장점 : 보안상 값 변경 방지, 코드 변경시 실수 방지, 스레드 동시 접근 줄임
const daysInWeek = 7;
const maxNumber = 5;


// note!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze()) - 데이터 자체를 절대 변경하지 못함.
// Mutable data types : all objects(변경 가능) by default are mutable(배열) in JS
// favor immutable data type always for a few reasons:
// - security
// - thread sagety
// - reduce human mistakes



// 4. Variable types
//  1) primitive type : 더이상 작은 단위로 나뉠 수 없는 것. 숫자 스트링 등. 값 자체가 메모리에 저장됨
//  2) object type : 싱글 아이템을 묶어서 박스로 관리 가능한 것. 함수도 포함. 값이 너무 커서 메모리에 저장x
// 1)
// number : js는 number만 있으면 모든 숫자 표현 가능. 
// bigInt : 최근 bigInt 추가됨. 그냥 숫자에 n을 붙이면 됨. 알아두기만!!
// string : 문자도 모두 string으로 표현 가능
const brendan = 'breandan';
const helloBob = `hi ${brendan}!`;  // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
// boolean : 
//  false: 0, null, undefined(선언은 됐지만 값 지정 x), NaN, ''
//  true: any other value
// symbol : 고유한 식별자를 주고 싶을 때. 동일한 string도 다르게 인식.
// 2)
// object : 박스 형태 
const ellie = {name: 'ellie', age:20};
ellie.age = 21; // const로 잠궜지만 name과 age라는 변수가 존재해서 다른 값으로 변경이 가능하다. 

// 5. Dynamic typing: 
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`); // type은 string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);  // type이 number로 바뀜
text = '7' + 5;  // string + number
console.log(`value: ${text}, type: ${typeof text}`);  // 숫자를 문자로 바꿔서 문자+문자를 해줌. 75 출력
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);  // 문자를 숫자로 타입 변경 후 나누기 연산함.


