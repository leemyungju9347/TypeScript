## 📖 타입 가드 (Type Guard)
### 타입 가드를 위한 예제 소개
`Developer`과 `Person`이라는 인터페이스를 설정하고 함수에 두 인터페이스를 유니온 방식으로 정의해줬다.
```ts
interface Developer {
	name:string;
	skill:string;
}

interface Person {
	name:string;
	age:number;
}
  
function  introduce():  Developer  |  Person {
	return { name : 'Tony', age : 33, skill: 'Iron Marking'}
}

let tony = introduce();
console.log(tony.skill); // error
```
함수를 `tony` 변수에 할당한뒤 정의해준 속성 skill을 출력했을때 접근하지 못하고 에러가 발생한다.

> 유니온 속성은 공통된 속성에만 접근할 수 있는 특징이 있기때문에 **skill 속성에 접근했을때 없는 걸로 간주가 되고 접근할 수 없다.** 공통된 속성인 name까지만 접근할 수 있다.

#### 타입 단언을 이용한 접근
- skill 속성에 접근할 수 있는 방법으로는 타입단언을 이용할 수 있다.
- 타입의 범위를 구체화 시켜나가는것이 타입 단언을 이용한 타입 정의 방식
```ts
if( (tony as  Developer).skill ) {
	let skill = (tony as Developer).skill;
	console.log(skill);
	
}else  if( (tony as  Person).age ) {
	let age = (tony as Person).age;
	console.log(age);
}
```
타입단언을 이용해서 접근하니 코드의 가독성이 줄어들고 비효율적인 코드가 됐다.

> 이러한 상황에 `타입가드` 적용이 필요하다.

### 타입 가드 소개와 적용
- 타입가드 특징
	- 함수 이름에 `isDeveloper`처럼 is 를 많이 붙인다.
	- `is`는 타입 가드에서 사용되는 키워드

```ts
// 타입가드 정의
function  isDeveloper(target:  Developer  |  Person):target  is  Developer {
	return (target as  Developer).skill  !==  undefined; 
}
```
- `isDeveloper`함수는 실제 많이 사용하는 패턴
- `target  is  Developer` 는 **넘겨받은 파라미터가 실제 해당 타입인지 구분하는 키워드**라고 해석한다.
- `return (target as  Developer).skill  !==  undefined`는 **target이라는 obj에 skill이 있을때 Developer 타입이다 라고 취급하겠다는 것**

> 결론적으로 `isDeveloper` 함수의 내부로직을 통과하고 나면 인자로 넘겼던 값이 `Developer`인지 아닌지 구분해준다.


```ts
// 결과문이 true / false로 나오고, 위의 if문을 간결화할 수 있다.
if( isDeveloper(tony) ) {
	tony.skill  // developer이면 skill이 제공
}else {
	tony.age  // 그렇지 않을 경우에 tony는 age가 제공됨
}
```  
원래 코드에서는 유니온이기때문에 `tony.name` 처럼 공통된 속성만 제공됐는데,
`타입가드`로 정의하면서 실제 코드 안에 필요한 속성에 바로 접근이 용이하도록 도와줬다.

### 🔍 참고 출처
- [타입스크립트 입문 - 기초부터 실전까지](https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9E%85%EB%AC%B8/dashboard)
