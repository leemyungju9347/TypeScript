// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T {
//     console.log(text.length);
//     return text;
// }
// logTextLength('hi');

// 어떤 타입이 들어올지 모르기 때문에 length를 출력했을떄 에러를 반환한다.


// 제네릭의 타입 제한 2 - 정의된 타입 이용하기

interface LengthType {
    length: number
}

function logTextLength<T extends LengthType>(text: T): T {
    text.length;

    return text;
}

logTextLength('a') // length라는 속성을 기본적으로 포함하고 있기 때문에
logTextLength(10) // TypeError -> 숫자는 length를 포함하고 있지 않기 때문
logTextLength({ length: 10 }) // 객체도 가능
logTextLength({ leng: 10 }) // TypeError

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');

getShoppingItemOption('name')   