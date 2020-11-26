// 타입추론 기본 1 

// var a;
// 변수를 선언하면 ts 파일이기 떄문에 vscode 내부적으로 랭귀지 서버가 타입을 추론하기 시작한다.
// a변수는 타입을 지정해주지 않았기 떄문에 기본적으로 any라는 타입으로 정의되어 있음
// 인텔리센스 : 특정 변수의 관련된 타입, 정보들을 (타입스크립트 내부에서) 해석해서 보여주는 것 - vscode 내장되어있는 랭귀지 서버의 기능

// var a = 10;
// 만약 a를 10으로 지정하면 a변수의 타입은 number로 변경되는 것을 볼 수 있다. string으로 선언하면 string

// vscode에서 코드를 작성해나갔을떄 코드 타입을 정의해나가는 방식 -> 타입추론
// 기본적인 변수의 선언과 할당에 의해서 가볍게 타입 추론

function getB(b = 10) {
    let c = 'hi'
    return b + c
}

// 파라미터를 b = 10를 선언해줬더니 반환값 또한 number로 추론해줌
// 이런 동작 하나하나가 타입 추론의 과정
// 반환값으로 b + c 같이 넘겨줬을때 리턴값은 strign 10 + 'hi'를 더해줬을때 string을 반환할 것이라고 타입스크립트 내부적으로 추론
// 10 + '10' = 1010

// 타입추론 기본 2
// 인터페이스 + 제네릭, Dropdown 인터페이스에 타입을 줄때 추가적인 타입을 받아서 value에 타입을 가져다 쓰는 형태
// interface Dropdown<T> {
//     value:T;
//     title:string
// }

// let shoppingItem:Dropdown<string> = {
//     value:'abc',
//     title:'hello'
// }
// 인터페이스 제네릭을 정의했을떄 제네릭의 값을 타입스크립트 내부적으로 추론해서 변수의 필요한 속성들과 타입까지 보장해주는 타입추론의 기본적인 방식

// 타입추론 기본 3
interface Dropdown<T> {
    value:T;
    title:string
}

interface DetailedDropdown<K> extends Dropdown<K> {
    description:string;
    tag:K
}

// extends로 확장할 경우 DetailedDropdown에 넘겨준 제네릭 <k>가 Dropdown에 있는 제네릭 <T>까지 확장된다.
// 때문에 Dropdown의 value 값은 제네릭 값으로 넘겨준 string값으로 추론된다.


let detailedItem:DetailedDropdown<string> = {
    title:'abc',
    description:'ab',
    value:'a',
    tag:'b'
}

let dropDownItem:Dropdown<string> = {
    value:'hi',
    title:'aaa',
}

// 이런식으로 바로바로 변동되고 추론방식이 코드를 작성하고 저장을 할때마다 바로바로 타입스크립트 랭귀지서버에 의해서 추론이 되고 그 값들의 타입이 맞다 옳다를 코드상에서 나타내줄 수 있다. 타입스크립트 추론


// Best Common Type
let arr = [1,2,true,false,'a']

