function fetchItems() {
  let items = ['a', 'b', 'c'];
  return items;
}

const result = fetchItems();
console.log(result);

// fetchItems 함수를 만들고 호출했을때 기본적으로 `string[]` string이 있는 배열을 반환하겠다고 타입스크립트가 추론한다.
// result 의 결과는 기본적으로 string

// 리턴 타입을 주지않더라도 기본적으로 타입 내부적으로는 안에서 선언한 변수로 리턴을 보내주기 떄문에 fet함수의 리턴타입은 기본적으로 `string[]`가 될 것이라고 추론
// 동기적인 코드 (바로바로 실행이 가능해서 확인할 수 있는 코드)에 대해서는 타입스크립트도 추론이 가능하다.

// 만약 비동기적인 코드라면?

// function fetchItems(): Promise<string[]> {
//   let items: string[] = ['a', 'b', 'c'];
//   return new Promise(function (resolve) {
//     resolve(items);
//   });
// }

// promise 방식으로 리턴을 하게 되면 타입스크립트 내부에서 Promise <unknown>이 뜬다. => 타입을 잘모르겠다. 추측하지 못함
// 즉, 현재 fetchItems를 실행하는 시점에서 타입스크립트가 프로미스 안에 들어오는 비동기 코드들에 대해서 알 수가 없다는 뜻

// 프로미스를 제대로 쓰기 위해선 비동기의 반환값이 무엇인지 명시를 해줘야 한다.

// 프로미스는 기본적으로 제네릭을 이용해서 정의됨
// Promise<string[]> 타입을 프로미스라고 정의해주고 프로미스의 타입까지 정의해주는게 좋다.
//fetchItems();

// 프로미스의 리졸브된 값이 프로미스의 value가 될 것이다. 라는 것을 알 수 있고, items타입이: string[]이기 때문에 반환값도
