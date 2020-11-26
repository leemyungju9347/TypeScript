// 인터페이스 
interface Developer {
    name : string;
    skill : string
}

interface Person {
    name : string
}

let developer : Developer; 
let person : Person;
// developer = person /// 타입스크립트 관점에서 에러 발생
// skill 이 없다는 에러,오른쪽에 있는 타입이 더 작은관계를 유지하고 있기 떄문에 , 부분집합이기 떄문에 구조적으로 더 큰 타입에서는 작은타입을 지원할 수 없다.

// person은 name속성만 가지고 dveloper는 name, skill 속성을 가지고 있어서 오른쪽에 있는 속성이 왼쪽에 할당될 수 없음
// 이유는 객체가 더 많은 속성 (developer 왼쪽에 있는 타입)이  구조적으로 더 큰 관계를 갖고있기떄문에 
// 타입호한은 오른쪽에 있는 속성이 더 많은 속성을 갖거나 구조적으로 더 컸을때 왼쪽과 호환이 된다.라고 볼 수 있다.

// class Person{
//     name :string
// }
// developer = new Person();
// class 방식을 사용하더라도 타입이 맞지 않다고 하고있음 = > 구조적


// 반대로
//person = developer;
// 반대로 에러가 나지 않는다


// 구조적 타이핑이란 
// 타입스크립트에서 타입 코드들이 서로 맞는지 확인할떄 타입별칭, interface, class 를 확인하는 것이 아니라 
// 내부적으로 존재하고 있는 속성과 타입에 대한 정의들의 대해서 비교하는 것 = 구조적 타이핑

// 타입 호환 예제 - 함수, 제네릭

// 함수
// 함수 표현식으로 비교
let add = function (a:number) { // 함수자체를 변수에 담아서 비교하기 위해서 
    
}

let sum = function (a:number, b:number) {
    
}

// 첫번째 함수와 두번째 함수의 차이는 파라미터 갯수의 차이와, 구조적으로 sum이라는 함수가 add 함수보다 더 크다고 볼 수 있음
//add = sum // 당연히 안됨 add 는 하나의 인자만 받기떄문에 안됨
// sum이 범위적으로 타입적으로 더 크기떄문에 , 더 넓기 떄문에 sum이라는 타입이 add라는 타입과 호환이 되지 않는다.
sum = add // sum은 2개의 파라미터가 받을 수 있기떄문에 두개가 호환이 가능하지만

// 제네릭
interface Empty<T> {
    // ... 
}

let empty1:Empty<string>;
let empty2:Empty<number>;

// 인터페이스가 빈값이기 떄문에
empty1 = empty2;
empty2 = empty1;
// 양쪽으로 호환이 가능하다 

interface NotEmpty<T> {
    data:T
}

let notEmpty1:NotEmpty<string>;
let notEmpty2:NotEmpty<number>;

notEmpty1 = notEmpty2; // 서로 호환되지 않음
notEmpty2 = notEmpty1;
// string / number여부로 동일하게 속성은 있지만 구조적으로 차이가 생김

// 다시한번 타입 호환에 대해 정의를 하자면,
// 기본적으로 타입 호환은 함수 내부적으로 파라미터, 반환타입이 많은 타입,옵션을 가져갔을떄 타입, 구조적으로 더 큰것이고 
// add 라는 변수의 sum이라는 더 넓은 변수를 할당할 경우 호환되지 않음


