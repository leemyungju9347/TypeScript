//  숫자형 이넘
// enum Shoes{
//     Nike = 10, // 0
//     Adidas, // 1
//     Sth, // 2
// }

//let myShoes = Shoes.Nike;
//console.log(myShoes); // 0이 출력된다
// 왜?
// 이넘은 별도에 값을 지정하지 않으면 숫자형 이넘으로 취급한다.
// 툭정값을 할당하거나 초기화하지 않을 경우 기본 값들은 0, 숫자가 된다.
// 목록을 보면 아래로 내려갈 수록 1씩 증가한다.

// 만약
// enum Shoes{
//     Nike = 10,
//     Adidas, // 11
//     Sth, // 12
// }

// 나이키에 10을 할당했을 경우 아래로 내려갈 수 록 1씩 증가해 Adidas 값은 11, Sth 값은 12가 되는 것을 볼 수 있다.

// 문자형 이넘
enum Shoes{
    Nike = '나이키',
    Adidas = '아디다스'
}

let myShoes = Shoes.Nike;
console.log(myShoes); // 나이키

enum Answer {
    Yes = 'Y',
    No = 'N',
}

// 예제
// function askQuestion(answer:Answer) {
//     if(answer === 'yes') {
//         console.log('정답입니다.');
        
//     }

//     if( answer === 'no') {
//         console.log('오답입니다.');
        
//     }
// }

// askQuestion('예스')
// askQuestion('y')
// askQuestion('Yes')

// 인자값을 넘겨줄때 다양한 형태의 문자열을 넘겨주는 상황이 생긴다.
// 이런 상황들을 구체적인 값으로 제한하는 것이 이넘이다.

function askQuestion(answer:Answer) {
    if(answer === Answer.Yes) {   
        console.log('정답입니다.');
        
    }

    if( answer === Answer.No ) {
        console.log('오답입니다.');
    }
}

// 파라미터로 넘겨주는 값이 단순한 문자열 비교가 아니라 내가 가지고 있는 두개의 데이터 중에 하나인지를 비교해서 판단하게 되는 것이다.

askQuestion(Answer.Yes)
askQuestion('yes') // error 
// 함수를 enum을 이용해서 정의했기때문에
// enum에서 제공하는 데이터만 입력할 수 있게 된다.

/*
    드롭다운등의 목록이 필요한 형태에서 이넘을 정의해서 사용하는게ㅐ정확한 코드와
    예외처리들의 케이스들이 줄어들 것을 예상한다.
*/





