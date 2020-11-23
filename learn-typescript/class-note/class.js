// class Person {
//     // 클래스 로직

//     // 클래스가 하는 역할은 기본적으로 인스턴스 생성해주는 역할

//     constructor(name,age) { // 초기화 메서드
//         console.log('생성되었습니다.');
//         this.name = name;
//         this.age = age;
//     }

// }

// // 인스턴스를 만들었을때 constructor 안에 있는 로직이 실행된다.
// const seho = new Person('세호',30) // 생성 되었습니다. 출력

// console.log(seho); // 넘겨준 인자값으로 객체를 생성해줌


const user = {name : 'user', age: 100}
// 사용자의 권한을 추가해서 새로운 객체 생성
const admin = {name : 'user', age: 100, role:'admin' } 
// 기존에 user라는 속성에 role이라는 정보 추가

/*
    새로운 객체 admin 과 user의 중복되는 코드
    많은 객체들을 활용해나갈때 중복되는 코드들에 대해서 줄일 수 있는 방법이 필요하다.

    자바스크립트에서 지향하는 프로토타입을 이용한 상속.

*/

// 이 관점에서 user의 정보들을 admin에 재활용할 수 있도록 한다.
// const admin = {};
// // 프로토타입의 상위에 admin을 주겠다.
// admin.__proto__ = user
// admin.age // 100

// // user라는 객체에 대한 정보를 admin에서 내려받아서 사용 === 상속


// admin.role = 'admin'

// user에서 정의했던 상위 오브젝트 porototype age,name을 사용할 수 있다.
// 이런 관점에서 object,array,string 기타 데이터 타입에 대한 속성과 api들은 prototype으로 상속받아서 사용할 수 있었다.

// 이러한 문법들이 어디선가 지원이


/*

    어떤식의 혜택을 주고 있었는지, 

    관련된 타입에서 제공하는 메소드들을 쓸 수 있었다.
    Built-in Javascript API 혹은 Javascript Native API

    단순히 객체 정보를 확장하는 것 뿐만 아니라 
    정의되어 있는 기능들을 바로 활용할 수 있도록 사용하고 있었다.

*/

// 프로토타입과 클래스와의 관계

// 클래스가 실제로 내부적으로 돌았을때 어떤 결과를 생산하는지 ? 

// 클래스 = 기존에 있었던 단순히 문법만 바뀐 보기좋은 코드


// function Person(name,age) {
//     this.name = name;
//     this.age = age;
// }

// const capt = new Person('캡틴',100);


// class Person {
//     constructor(name,age) { 
//         console.log('생성되었습니다.');
//         this.name = name;
//         this.age = age;
//     }

// }
// const seho = new Person('세호',30)
// console.log(seho);

/*
    위와 아래는 같은 코드
    기존문법에도 프로토타입을 이용한 상속같은 개념을 생성자 함수를 이용해 구현할 수 있었다.

    객체지향 언어에 익숙한 사람들이 자바스크립트에 접근하기 수월하게 하기 위해 클래스 기반에 문법을 제공 했던 것,
    클래스를 babel같은 프로그램으로 돌려서 보면 기존에 생성자 함수를 썻다는 것을 알 수 있음

    클래스를 사용한다고 해서 기존에 문법이 바뀌지

    언어 프로토타입 기반으로 코딩을 하는 언어의 특성은 클래스문법으로 바뀌었다고해소ㅓ 라고 해서 바뀌지 않았음 
    기존에 프로토타입 기반의 상속은 그래도 유지된다.라고 이해하면됨

    그렇기때문에 생성자 함수를 클래스 문법을 사용하지 않더라도 충분히 계속 만들어 나갈 수 있다.

    


*/