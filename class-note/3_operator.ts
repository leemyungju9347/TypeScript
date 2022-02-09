var seho: string | number | boolean

function logMessage(value : string | number) {
    console.log(value);   
    if( typeof value === 'number') {
        value.toLocaleString()
    }

    if( typeof value === 'string') {
        
    }
}

logMessage('hello');
logMessage(100);

interface Developer {
    name : string;
    skill :string;
}

interface Person {
    name: string;
    age: number
}

function askSomeone(someone : Developer | Person) {
    someone.name
    someone.skill
    someone.age
}







