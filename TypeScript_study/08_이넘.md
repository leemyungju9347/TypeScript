## 📖 이넘
### 이넘 소개
이넘이란? 특정 값들의 집합을 의미하는 자료형

###  숫자형 이넘
```js
enum Shoes{
	Nike, // 0
	Adidas, // 1
	Sth, // 2
}

let myShoes = Shoes.Nike;
console.log(myShoes); // 0 
```
- 콘솔로그로 Shoes값을 출력했을때 0이 출력된다.
	- 이넘은 별도에 값을 지정하지 않으면 **숫자형 이넘으로 취급**
	- **특정값을 할당하거나 초기화하지 않았기 때문에 기본 값들은 0, 숫자형이 된다.**
- 프리뷰로 확인했을때 목록의 값을 보면 아래로 내려갈 수록 값이 **1씩 증가**한다.

  
```ts
enum Shoes{
	Nike = 10,
	Adidas, // 11
	Sth, // 12
}
```
Nike에 10을 할당했을 경우 아래로 내려갈수록 1씩 증가해 Adidas 값은 11, Sth 값은 12가 되는 것을 볼 수 있다.

### 문자형 이넘
```ts
enum Shoes{
	Nike  =  '나이키',
	Adidas  =  '아디다스'
}

let myShoes = Shoes.Nike;
console.log(myShoes); // 나이키
```
Shoes라는 이넘에 문자형 값을 할당했을 경우 할당한 문자열 값이 출력되는 것을 알 수 있다.


### 이넘 활용 사례
- 일반적인 형태
```ts
function askQuestion(answer) {
	if(answer === 'yes') {
		console.log('정답입니다.');
	}

	if( answer === 'no') {
		console.log('오답입니다.');
	}
}
```

인자값을 문자열로 넘겨줄때 정해진 값이 아닌 다양한 형태의 값을 넘겨주는 경우가 발생한다.
```js
askQuestion('예스')
askQuestion('y')
askQuestion('Yes')
```

이러한 경우에 **구체적인 값으로 제한하는 것이 `이넘`이다.**
- 이넘을 적용한 형태

```ts

enum Answer {
	Yes  =  'Y',
	No  =  'N',
}

function  askQuestion(answer:Answer) {
	if(answer === Answer.Yes) {
		console.log('정답입니다.');
	}

	if( answer === Answer.No ) {
		console.log('오답입니다.');
	}
}

askQuestion(Answer.Yes)
```
**파라미터로 넘겨주는 값이 단순한 문자열 비교가 아니라 내가 가지고 있는 두개의 데이터 중에 하나인지를 비교해서 판단하도록 하는 것**
```ts
// eum으로 정의한 함수를 일반 문자열로 출력했을 경우
askQuestion('yes') // error
```
함수를 enum을 이용해서 정의했기때문에 enum에서 제공하는 데이터만 입력할 수 있다.

> 드롭다운등의 목록이 필요한 형태에서 `이넘`을 정의해서 사용하는게 정확한 코드와 예외처리들의 케이스들을 줄이는 방법이다.

### 🔍 참고 출처
- [타입스크립트 입문 - 기초부터 실전까지](https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9E%85%EB%AC%B8/dashboard)
- [이넘(Enums)](https://joshua1988.github.io/ts/guide/enums.html#%EC%9D%B4%EB%84%98-enums)
