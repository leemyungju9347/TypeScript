

// function add(a,b) {
//     return a + b;
// }

// // sum(10,'20') // 1020 
// // sum 함수는 두 수의 합을 구한다는 관점에서 숫자만 입력해야함
// // 만약에 숫자가 아닌 문자를 입력했을때?

// // 결과가 숫자 + 문자열이기 때문에 1020이 출력된다.

// add(10,20)

// @ts-check

/**
 * 
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 */

// 첫번째숫자 -> 함수에 대한 사용방법까지 정의
function sum(a,b) {
    return a + b
}

sum(10,'20')