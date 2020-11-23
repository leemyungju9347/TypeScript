class Person {
    // 1. 첫번째 차이점 클래스최상단에 사용할 속성, 멤버변수를 정의해줘야한다.
    private name : string; // 클래스 안에서만 사용하고 싶으면 private
    public age : number;  // 기본적으로 public 혹은 protected
    readonly log:string // readonly 읽기 접근만 할 수 있고, 값을 변경할 수 없다.
    // 3. 멤버변수에 대한 유효 범위까지 설정할 수 있음
    // 이런식으로변수의 접근 범위까지 제한할 수 있는게 타입스크립트에서 제공하는 문법

    // 2. 두번째 차이점 파라미터에 대한 타입도 구체적으로 정의
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
}

// 리액트 예전 문법 - 클래스 기반 코드
class App extends RTCIceCandidate.Component {
}

// 리액트 최신 문법 - 훅 기반의 함수형 코드
function App() {
    return <div>Hello World</div>
}


// vue
// 최근 추가될 컴포지션 api 

new Vue({
    el:'',
    setup() { // 추가적인 옵션 사용

    }
})

// 리액트나 뷰에서 클래스 문법을 볼 일이 많지 않을 수 있다.