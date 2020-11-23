// 1. 문자열

// JS 문자열 선언
//const str = 'hello';

// TS 문자열 선언
const str: string = 'hello' // var 변수: 변수타입 = 값의 형태

// TS 숫자
const num: number  = 10

// TS 배열
const arr: Array<number> = [1,2,3];
const heroes: Array<string> = ['Capt','Thor','Hulk']

const items: number[] = [1,2,3] // 배열 arr와 items는 같은 형태


// TS 튜플
// 배열 특정 인덱스의 타입까지 정하는 것
// 배열의 각 인덱스의, 모든 인덱스의 타입이 정의되어 있는것
const address: [string,number] = ['gangnam',100]

// TS 객체
const obj: object = {};
const personEx: object = {
    name:'capt',
    age:100
}

// 구체적으로 객체안 속성들의 타입을 정의해줄 수 있다.
const person: {name:string, age:number} = {
    name:'thor',
    age:100
}

// 진위값
const show:boolean = true;