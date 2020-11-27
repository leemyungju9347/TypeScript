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

export { Contact, PhoneType };
