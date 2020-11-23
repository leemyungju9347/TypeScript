//function logMessage(value:any) {
    //console.log(value);
    // any로 되어있기때문에 타입이 추론하는 시점에서 타입을 정의할 수 없어서 
    // 변수에 대한 api의 속성들을 확인할 수 없다.
//}

// logMessage('hello');
// logMessage(100);


// function logMessage(value:string | number) {
//     console.log(value);  
// }

// logMessage('hello');
// logMessage(100);

// 타입을 하나 더 추가하고 싶을때 `|`를 추가하고 타입을 입력한다.
// `|` 는 타입스크립트에서 `유니온 타입(Union type)` 이고, 유니온 타입은 하나 이상 타입을 쓸 수 있도록 한다.

// 유니온 타입의 장점
let seho: string | number | boolean; // 변수에 정의하고 싶은 타입 정의 넣고싶은 만큼 추가할 수 있다.

function logMessage(value:string | number) {
    console.log(value);  
    if(typeof value === 'number' ) {
        value.toString() // 유니온타입에 경우 해당 타입에 맞게 api를 바로 사용할 수 있게 된다.
    }

    if( typeof value === 'string' ) {
        value.toLocaleLowerCase()
    }

    throw new TypeError('value must be string or number');
    // 이러한 속성을 이용해서 에러 string과 number가 아닌 경우에 TypeError를 출력할 수 있음.
}

// 이러한 타입을 구분하는 과정을 타입 가드: 특정 타입으로 타입의 범위를 좁혀나가는 (필터링) 하는 과정


// 유니온타입 특징
// interface Developer {
//     name:string;
//     skill:string;
// }

// interface Person {
//     name:string;
//     age:number;
// }

//function askSomeone(someone: Developer | Person) {
    // 유니온타입은 인터페이스 두개를 연결했을때 공통적인 속성만 접근할 수 있도록 제공한다.
    // 유니온 속성은 에러의 위험이 있기떄문에 공통된, 보장된 속성만 제공한다.
    // 두가지 다 접ㄱ,ㅡㄴ하고 싶다면 타입가드를 이용해서 특정 타입으로 제한한 뒤 타입을 접근해서 걸러내는 방식으로 하는것을 추처한다.
//}


// & 연산자를 이용한 인터섹션 타입

// let capt: string & number & boolean; 
// string, number, boolean을 모두 만족하는 타입 

// Developer와 Person의 속성을 모두 포함하는 타입으로 정의했기 때문에 세가지 모두 접근할 수 있다.
// function askSomeone(someone: Developer & Person) {
//     someone.skill
//     someone.age
//     someone.name
// }

// 섬원 타입은 디벨로퍼와 펄슨을 포함한 세개의 속성을 가지는 것-> 그것이 인터섹션
// 이것이 유니온과 인터섹션의 차이
// 실무에서는 유니온이 더 많이 사용됨


// 유니온과 인터섹션의 차이
interface Developer {
    name:string;
    skill:string;
}

interface Person {
    name:string;
    age:number;
}

// 유니온타입

//function askSomeone(someone: Developer | Person) { }

//askSomeone({name: '디벨로퍼', skill: '웹 개발' }); // Developer
//askSomeone({name: '펄슨', age: 100}); // Person

// 인터섹션 
function askSomeone(someone: Developer & Person) {
    someone.skill
    someone.age
    someone.name
}

askSomeone({name: '디벨로퍼', skill: '웹 개발' }); // error
askSomeone({name: '펄슨', age: 100 }); // error

askSomeone({name: '디벨로퍼', skill: '웹 개발', age: 100 }); // success

// error가 발생
// 인터섹션에서는 Developer 와 Person의 속성이 합한 객체를 넘겨달라는 메세지가 나온다.

/*  
    차이점
    유니온의 경우 함수 내부에서 타입가드, 타입 추론을 실행해야하는 작업이 있는 반면에, 실제로 넘기는 타입에 대해서는 선택지가 생긴다.

    인터섹션의 경우 두개 타입을 포함하는 새로운 타입을 만들게 되는 것.
*/
