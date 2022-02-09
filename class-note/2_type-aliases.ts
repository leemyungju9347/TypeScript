
interface Person {
    name : string;
    age: number
}

// type Person = {
//     name : string;
//     age: number
// }

// 인터페이스와 타입 별칭의 차이
// var seho : Person = {

// }

type MyString = string;
var str : MyString = 'hello';

type Todo = {
    id : string;
    title : string;
    done : boolean
}

function getTodo(todo: Todo) {}