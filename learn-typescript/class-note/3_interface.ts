interface User {
    age: number,
    name: string
}

// 변수에 인터페이스 활용
const joo : User = {
    age:28,
    name:'myungjoo'
}

// 이후에 해당 유저의 변수를 생성할때
// myungjoo 라는 변수는 user라는 인터페이스로 정의 되어있다. 라는 뜻으로 볼 수 있다.


// interface를 적용할때의 장점은 
// 동일한 규칙으로 약속되어 있기 때문에 타입의 규칙을 쉽게 확인할 수 있다.
// 다른 사람이 보더라도 인터페이스의 규칙이 약속되어 있기 때문ㅇ
// 동일한 규칙으로 약속을 해


//따라서 seho라는 변수는 interface에서 정의해둔 상호간의 약속을 따라서 age,name속성을 무조건 정의해줘야 한다.

// 함수에 인터페이스 활용
// 인터페이스는 상호간의 약속이기 때문에 인터페이스를 사용한다고 하는 것은? 이 함수는 항상 특정형식을 준수하는 데이터만 받겠다고 정의하는 것
// user라는 인터페이스의 형식만 따르는 데이터를 받겠다는 것
// 인터페이스에 형식을 따르지 않았을때 에러가 발생하고, 
// 인터페이스에 맞게 속성을 정의해준다면 getUser에 인자를 넘길 수 있는 자격이 생긴다.
function getUser(user:User) {
    console.log(user);
}

const capt = {
    name : '캡틴',
    age:100
}

getUser(capt)


// 함수의 스펙(구조)에 인터페이스를 활용

// api를 호출해와서 데이터 모양을 정의하고 활용할때 ts가 가장 빛을 발하는 구간

// 함수의 모습까지 인터페이스로 정의
// 라이브러리를 직접 만들거나 여러명이서 협업할때 함수의 규칙을 정하고 출발
interface SumFunction {
    (a: number, b:number):number;
}

let sum: SumFunction;
sum = function(a:number, b:number):number {
    return a + b
}


// 인덱싱
// 속성이름이 정해지지 않고 사용할때마다 속성을 임의로 부여해서 사용하는 방식
interface StringArray {
    [index:number] : string
}

let arr:StringArray = ['a','b','c'];
arr[0] // 'a' 
// 배열에 있는 모든 값의 타입은 string
// 배열의 인덱싱 방식에 대해서 인터페이스를 정의할 수 있다는 것.


// 딕셔너리 패턴
interface StringRegexDictionary {
    [key:string] : RegExp
}

let obj: StringRegexDictionary = {
    // somthing: /abc/,
    // cssFile:'css'
    cssFile: /\.css$/,
    jsFile:/\.js$/,
}

// 객체의 인덱스를 접근할떄 
obj['cssFile'] = 'a'
// 정해놓은 규칙(인터페이스)에 어긋났기 때문에 일반 문자열을 부여했을때 오류가 난다.

Object.keys(obj).forEach(function(value){ })

// 딕셔너리 패턴에 의해서 obj를 조작핳ㄹ떄마다 타입스크립트가 자동적으로 추론해서 타입까지 정의해줌

// 인터페이스 확장
/*
객체지향프로그래밍의 상속, 프로토타입처럼
인터페이스를 상속받아서 기존의 것 보다 더 확장해서 쓸 수 있는 것들을 말함
*/

interface Person {
    name:string;
    age:number;
}

interface Developer extends Person{
    language:string;
}

var captain: Developer = {
    language: 'ts',
    age:100,
    name:'캡틴'
}

// 중복되는 값들을 다른 인터페이스ㅏ가 갖고 있다면
// 갖고 있는 속성과 타입에 대해서 상속(확장)을 받아서 사용할 수 있다.

/*
    Person에서 확장을 받았기때문에 Person에 있는 타입들까지 모두 정의해줘햐한다. 이것이 인터페이스 확장의 규칙
*/