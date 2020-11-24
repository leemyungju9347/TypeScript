interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

// 전화번호부의 규칙, 규격 정의
interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

enum PhoneType {
  Home = 'home',
  Office = 'office',
  Studio = 'studio',
}

// api
// TODO: 아래 함수의 반환 타입을 지정해보세요.
// 전화번호부를 불러오는 함수
function fetchContacts(): Promise<Contact[]> {
  // TODO: 아래 변수의 타입을 지정해보세요.
  const contacts: Contact[] = [
    {
      name: 'Tony',
      address: 'Malibu',
      phones: {
        home: {
          num: 11122223333,
        },
        office: {
          num: 44455556666,
        },
      },
    },
    {
      name: 'Banner',
      address: 'New York',
      phones: {
        home: {
          num: 77788889999,
        },
      },
    },
    {
      name: '마동석',
      address: '서울시 강남구',
      phones: {
        home: {
          num: 213423452,
        },
        studio: {
          num: 314882045,
        },
      },
    },
  ];
  return new Promise(resolve => {
    setTimeout(() => resolve(contacts), 2000);
  });
}

// main
class AddressBook {
  // TODO: 아래 변수의 타입을 지정해보세요.
  contacts: Contact[] = [];

  constructor() {
    // 클래스가 생성될때 기본적으로 실행되는 초기화 코드 부분
    this.fetchData(); // 메서드 호출
  }

  fetchData(): void {
    fetchContacts().then(response => {
      // resoponse 가 Contacts[] 인 이유? fetchContacts함수가 프로미스를 반환하고 프로미스의 value의 타입이 Contact[]가 될것이라고 명시해줬기 떄문
      // 그렇기떄문에 then을 해줬을떄 기본적으로 제네릭으로 넘겨준 Contact[] 타입이 올 것이라는 것을 알 수 있음
      // 타입이 this.co로
      this.contacts = response;
    });
  }

  /* TODO: 아래 함수들의 파라미터 타입과 반환 타입을 지정해보세요 */
  findContactByName(name: string): Contact[] {
    // filter를 하기 떄문에
    return this.contacts.filter(contact => contact.name === name);
  }

  findContactByAddress(address: string): Contact[] {
    return this.contacts.filter(contact => contact.address === address);
  }
  // home, office, studio
  // enum을 이용해서 폰타입 적용
  findContactByPhone(phoneNumber: number, phoneType: PhoneType): Contact[] {
    return this.contacts.filter(
      contact => contact.phones[phoneType].num === phoneNumber
    );
  }

  /*
    실제로
    findContactByPhone('hone');
    findContactByPhone('officce');
    같은 오타를 보내주는 경우가 생길 수 있고, 에러 나는 경우가 빈번하게 발생

    즉 이것을 변수화를 해서 변수를 보내주는게 안전하다. 타입 관접에서 안전한 코딩

    phoneType은 string으로 보내주는 것이 아니라 받으려고하는 폰타입은 home, office, studio 의 총세개의 값에 대해서만 취급하는 것을 알기 떄문에 이넘을 활용할 수 있다.

    phoneType:PhoneType 
    phoneType으로 정의해주게 되면 앞으로 
    findContactByPhone(phoneType.home) 같은 형식으로 호출해서 에러를 방지할 수 있다.

  */

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  displayListByName(): string[] {
    // map을 사용했기때문에 배열이 와야함
    return this.contacts.map(contact => contact.name);
  }

  displayListByAddress(): string[] {
    return this.contacts.map(contact => contact.address);
  }
  /* ------------------------------------------------ */
}

/*
    map 
    기존에 배열을 변환해서 새로운 배열을 만들어주는 것
  
  */

let heros = [
  { name: 'Tony', age: 30 },
  { name: 'Captain', age: 100 },
];

heros.map(hero => {
  return hero.name;
}); // ['Tony', 'Captain'] // 기존의 배열 값을 변형

new AddressBook();
