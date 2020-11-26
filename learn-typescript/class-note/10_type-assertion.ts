// 타입 단언 (Type Assertion)
let a;
a = 10;
a = 'abc';
let b = a as string;

// 타입 단언은 DOM API 를 조작할때 가장 많이 사용

// DOM API 조작
const div = document.querySelector('div');


// 실제 코드상에서 div.innerText; 사용했을 경우 div가 있다는 것을 보장해주지 않기때문에 if문을 거쳐서 코드를 사용하는게 일반적
// 이럴떄 타입 단언 사용
if( div ) {
    div.innerText; 
}