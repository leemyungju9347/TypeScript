interface Person {
    name : string;
    age:number;
}

// type person =  {
//     name :string;
//     age:number;
// }

let dal: Person = {
    name : '달이',
    age:30
}

// 타입은 인터페이스형식 뿐만아니라 어디에서나 쓸 수 있다. 
type MyString = string;
var str: MyString = 'hello'


type Todo = { id: string; title: string; done:boolean };
function getTodo(todo:Todo) { }


/*
    인터페이스와 타입별칭의 차이점
    1. 타입은 확장이 되지 않는다.
*/
