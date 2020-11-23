// 함수의 파라미터에 타입을 정의하는 방식
// function sum(a:number,b:number) {
//     return a + b
// }

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
    return 10;
}

// 함수의 타입을 정의하는 기본적인 방식 (파라미터 + 반환값)
function sum(a:number,b:number):number {
    return a + b;
}

sum(10,20,30,40)
// js와 달리 추가적으로 인자값을 넘겼을 경우 
// 타입스크립트에서 함수의 스펙을 정확하게 이해하고 불필요한 함수가 들어왔다는 오류처리를 한다.
// js와는 달리 엄격한 체크를 해줌

// 인자가 모자를 경우에도 에러표시

// 함수의 옵셔널 파라미터
function log(a:string,b?:string,c?:string) {
    
}

// 인자값은 석택적으로 생략하거나, 추가적으로 넘기고 싶은 상황에서는 
// 인자값 옆에 물음표? 추가
log('hello world');
log('hello TS','abc')