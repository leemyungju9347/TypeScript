// 일반 함수 사용시
// function logText(text) {
//     console.log(text);
//     return text
// }

// logText(10); // 숫자 10 
// logText('하이'); // 문자열 하이
// logText(true); // 진위값 true

// 제네릭 문법
// function logText<T>(text:T):T {
//     console.log(text);
//     return text
// }

// 로그텍스트의 함수를 호출할때 파라미터 값의 타입을 정의해서 호출시 넘겨준다.
// 즉 호출시 파라미터의 타입이 무엇인지 지정해서 넘겨주는 것.

//logText('하이') 
// '하이'라는 문자열을 넘겨줬기 때문에 logText함수의 text 타입은 '하이'라는 문자열이 된다.
// 또한 반환하는 값도 문자열로 정의한다.

// 한마디로 호출하는 시점에 문자열이 됐건 숫자가 됐건 타입을 넘겨줄 수 있는 것이 제네릭
// 위의 함수는 제네릭 문법을 사용한 것은 아니고 타입스크립트에서 자연적으로 추론해준 것

// 제네릭으로 정의하는 방법
//logText<string>('하이');

// logText에 string이라는 타입을 넘기겠다는, 즉 안에서 처리하는 text의 타입은 모두 문자열이여야 한다.라고 명시적으로 정의해준 것.


// function logText(text:string) {
//     console.log(text);
//     text.split('').reverse().join(''); // string이기 때문에 가능한 로직
//     return text
// }

// logText('하이'); // 문자열 하이
// logText(10); // 숫자 10 
// logText(true); // 진위값 true


// 기본 문법에서 타입을 구분하지 않고 전부 받을 수 있는 이유는? 
// 암묵적으로 함수에서 타입을 정의하지 않았기떄문에 함수의 타입은 'any'라고 지정되어 있음 떄문에 어떤 타입이든 다 받을 수 있다.

// text가 문자열이라고 가정하고 문자열을 활용하는 함수를 짜는 로직을 만들었을때

// 그랬을떄 logText는 문자열만 받아야한다는 가정이 생기게 된다.

// 숫자나 다른 타입을 받고싶지만 못받게되는 상황이 생긴다.

// 이럴때 숫자와, 불리언도 받을 수 있도록 함수를 여러개를 정의한다.
// function logNumber(num:number) {
//     console.log(num);
//     return num
// }

// logNumber(10);

// 하지만 유지보수 관점에서 봤을떄는 좋지 못한 코드가 된다.


// 유니온 타입을 이용한 선언 방식의 문제점
// function logText(text: string | number) { // 함수 안에서 여러가지 타입을 받을 수 있는 유니온 타입 방식, 반환 값도 자동적으로 스트링값과 넘버값 반환
//     console.log(text);
//     return text
// }

//const a = logText('하이');
// a의 값은 string과 number를 받아서 반환해주기 때문에 반환값이 string과 number가 되고,

//a.split('')
// 문자를 입력했음에도 불구하고, 문자열 api `split`를 사용했을때 에러가 발생한다.

// 정확하게 타입을 알 수 있어야만 split이 제공된다.
// number가 들어올 경우에 split가 제공되지 않기 때문
//logText(10);

/*
    이런 방식으로 선언했을 경우 들어가는 input에 대한 문제점은 해결
    but 타입을 받은 상황에서 함수 내부 파라미터 변수에 접근을 해봤을때 
    string이나 number 가 공통으로 접근할 수 있는 속성을 가진 api만 프리뷰 자동완성을 제공해준다는 문제점이 있다.

*/

// 이러한 문제점 때문에 input에 대한 문제점은 해결되었지만 반환값에 대한 문제점은 해결되지 않음

// 제네릭을 이용해 타입을 선언할 경우의 장점 
function logText<T>(text:T) :T { // 어떤 타입을 받을건지,제네릭을 쓸거야라고 정의하고, 받은 타입을 파라미터타입으로 정의하고, 리턴할때도 그대로 쓸것이다라고 정의
    console.log(text);
    return text
}

// 호출할때 함수의 타입을 정의
const str = logText<string>('abc');
// 함수를 string으로 정의했을때 인풋과 아웃풋 즉 인자와 반환값이 모두 스트링이 될 것이다라는 것을
// ts 내부에서 제네릭을 이용해 선언해주는 것.

// 반환값이 string으로 되는 것을 확인되기 떄문에
str.split('')
// str 변수가 문자열이라는 것을 타입스크립트도 알기때문에 타입을 명확히 알고 구성해나가는 것이 제네릭의 장점

// 또 다른 장점
// 타입을 각각 정의하는 것이 아니라 
// 실제로 타입을 정의할때
// 호출하는 시점에서 정의하는 것이 제네릭의 장점
// 타입을 추론해서 최종 반환값까지 정의하는 것이 제네릭의 장점

// 인터페이스에 제네릭을 선언하는 방법

// 기본 인터페이스 선언
// interface Dropdown {
//     value : string;
//     selected:boolean;
// }

// const obj :Dropdown = { value :'abc', selected :false }


// interface Dropdown<T> {
//     value : T;
//     selected : boolean;
// }
// 인터페이스를 제네릭으로 정의하는데 타입을 선언하는 시점에 타입을 추가적으로 넘겨서 타입을 바꿔보겠다는 뜻

//const obj : Dropdown<string> = { value:'abe' , selected: false }

// 인터페이스에 제네릭을 사용한다면 
// 인터페이스에 특정 속성에 대한 타입을 무조건 정의해줘야한다
// `Dropdown<string>` value 의 값이 string으로 정의 됨
// 만약 `Dropdown<number>` 로 정의해줬다면 value의 값을 number로 정의
// 인터페이스를 사용하면 얼마든지 속성의 타입을 바꾸면서 사용할 수 있음


// 제네릭의 타입 제한
// function logTextLength<T>(text:T[]):T[] {
//     console.log(text.length); 
//     text.length // 가 제공됨 배열이기 때문에, forEach 제공
//     text.forEach(text=>{
//         console.log(text);
        
//     })
    
//     return text
//     // 함수 안에서는 제네릭의 타입이 배열인 것을 알고있기 떄문에 배열의 대한 타입으로 가정을 하고 그에 따른 속성이나 api를 제공한다.
// }

// logTextLength<string>(['hi','abc'])

// 'T' 형식에 'length' 속성이 없습니다. 라는 메세지가 뜬다. 이유는? 
// 타입스크립트 입장에서는 함수에 어떤 타입이 들어오는지 알 수가 없다. length 가 있다는 것은 개발자만 알고있지, 타입스ㅡ립트는 알수 없음
// length를 사용하기 위해서는 <T>라는 제네릭의 타입을 좀 더 제한을 해서 혹은 힌트를 줘서 legnth가 있을 것이라고 추측을 할 수 있도록 만들게 한다.

// `logTextLength<T>(text:T[]):T[]`에 배열을 넘겨줌으로 T에는 length가 제공이 될 것이라는 추측을 할 수 있도록 한다.


// 제네릭의 타입 힌트를 추가적으로 줄 수 있다.


// 제네릭 타입 제한 2 - 정의된 타입 이용하기
// 타입을 배열로 지정하지 않고 특정타입으로 지정해서 넘겨받아서 사용할 수 있다.
// interface LengthType {
//     length : number;
// }

// function logTextLength<T extends LengthType>(text:T):T {
//     text.length;
//     return text
// }

// 제네릭으로 받은 타입에서는 length가 있을 것이다라고 해서 <T extends LengthType> 
// 제네릭으로 받은 타입은 항상 LengthType의 하위 타입이다.
// LengthType에서 제공하는 속성은 무조건 있는 상태에서 추가로 정의해줄 수 있다.라고 제한을 주는 것

//logTextLength('a')
// 문자열은 기본적으로 length 속성을 제공되기때문에 에러가 발생하지 않는다.

//logTextLength(10)
// 숫자 타입은 length 속성이 제공되고 있지 않기 때문에 에러가 뜬다.
// 내부 속성으로 제공되고 있지 않기 때문에 숫자는 포함할 수 없다.; 
// LengthType이용해서 제네릭 선언 방식의 타입 제한이 생긴다는 특징

// 제네릭의 타입 제한이 생긴다.

// 객체도 정의할 수 있음
// length가 아니라 leng 이라고 잘못 입력했을 경우에 받아들이지 못하고 에러 발생 length라는 속성으로 정의해줬기 떄문
//logTextLength({ length : 10 })

interface ShoppingItem {
    name: string;
    price : number;
    stock : number;
}

// 제네릭의 타입 제한 3 - keyof
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption:T):T {
    return itemOption
}

// extends 는 기존의 정의된 인터페이스 혹은 타입들을 확장할떄 사용
// `keyof ShoppingItem` 은 ShoppingItem에 있는 키들중에 한가지가 제네릭 타입이 될 것이다.
// 인자로는 naem price stock주ㅇ 한가지만 들어올 수 있도록 정의
// 제네릭에 올 수 있는 인자를 제한하는 것처럼 keyof로 제네릭의 타입의 범위를 줄이는 것


// ShoppingItem에서 정의되어 있는 속성 중 하나만 받을 수 있도록 제약하겠다.
// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
// 함수에서 에러가 나는 것을 볼 수 있음
// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');

getShoppingItemOption('name')

// 함수를 호출하고 `ctrl + space` (window 기준) 를 누르게 되면 넘길 수 있는 인자값들이 자동완성 되는 것을 볼 수 있다.

// getShoppingItemOption 함수의 인자는 ShoppingItem이라고 하는 이미 정의되어 있는 타입에서 
// 키 값들만 들어갈 수 있다라는 keyof라는 속성을 이용해서 타입을 정의하는 모습
