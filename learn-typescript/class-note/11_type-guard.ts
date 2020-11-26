interface Developer {
    name:string;
    skill:string;
}

interface Person {
    name:string;
    age:number;
}

function introduce(): Developer | Person {
    return { name : 'Tony', age : 33, skill: 'Iron Marking'}
}

let tony = introduce();
console.log(tony.name);
// 유니온 속성은 공통된 속성에만 접근할 수 있는 특징
// 때문에 skill에 접근했을떄 없는 걸로 간주가 되고 name까지만 접근할 수 있음

// skill 을 타입단언을 이용해 접근할 수 있음
if( (tony as Developer).skill ) {
    
    let skill = (tony as Developer).skill;
    console.log(skill);  
}else if( (tony as Person).age ) {
    let age = (tony as Person).age;
    console.log(age);  
}
// 타입의 범위를 구체화 시켜나가는것이 타입 단언을 이용한 타입 정의 방식
// 코드 가독성이 줄어들고 비효율적 이떄 타입가드 적용이 필요

// 타입가드 정의
// 함수 이름에 is 를 많이 붙임
// 'is' 타입 가드에서 사용되는 키워드
function isDeveloper(target: Developer | Person):target is Developer { // 넘겨받은 파라미터가 실제 해당 타입인지 구분하는 키워드
    return (target as Developer).skill !== undefined; // target이라는 obj skill이 있을떄 Developer 타입이다 라고 취급하겠다는 것
}// 실제 많이 사용하는 패턴

// 결론적으로 isDeveloper라는 내부로직을 통과하고 나면 인자로 넘겼던 값이 Developer인지 아닌지 구분해준ㄴ다.
// true / false로 나옴

// 위의 if문을 간결화할 수 있음
if( isDeveloper(tony) ) {
    tony.skill // developer이면 skill이 제공
}else {
    tony.age // 그렇지 않을 경우에 tony는 age가 제공됨
}

// 원래 코드에서는 유니온이기때문에 tony.name 처럼 공통된 속성만 제공되는 타입추론 방식을 봤었는데, 
// 이런 방식을 도와주는 것이 실제 타입가드를 정의하면서 실제 코드 분기물 안에 필요한 속성에 바로 접근이 가능하다.

