// value마다 인터페이스를 선언해주는 것이 아니라.
interface DropdownItem<T> { // DropdownItem은 타입을 받을 수 있다.
  value : T;
  selected :boolean;
}

const emails: DropdownItem<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const numberOfProducts: DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

// 하나의 인터페이스로 제네릭을 이용해서 여러가지 타입을 커버할 수 있는 제네릭의 장점
// 타입코드를 줄여나가는 제네릭의 장점

// email 이라는 타입만 받을 수 있음 
function createDropdownItem(item : Dropdown<string> | Dropdown<number> ) { 
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// 유니온 타입을 사용하지 않고 createDropdownItem 을 호출할때 제네릭을 선언해주면서 코드를 줄여나갈 수 있도록 한다.

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});





/*
  createDropdownItem 함수에 value를 string이 아닌 number로 정의했을때 
  const item = createDropdownItem(email); 부분에서 에러가 발생한다.

  `emails`와 `numberOfProducts`의 변수의 타입을 모두 수용할 수 있는 타입을 emails.forEach 구문에 오류가 나지 않도록 createDropdownItem 함수에 정의해줘야 한다.

*/

/**
  인터페이스로 정의하고 유니온 타입으로 Email과 ProductNumber 타입 선언

  하지만 동일한 속성들인데 속성안에서 타입이 하나 바뀌었다고해서 타입 정의의 대한 코드가 불필요하게 많이 늘어남

  향후 어떤 타입이 오든지 수용할 수 있도록 
  매번 타입 정의를 인터페이스를 통해서 하는 것이 아니라 
  어떤 타입이 오든지간에 그떄마다 유연하게 사용하겠다라는 것을 제네릭으로 변환해서 사용할 수 있도록 구현해야 한다.
  
 */