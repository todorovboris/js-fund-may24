// СТРУКТУРА
let obj1 = {
    x: 5, // "key: value" -> целият ред наричаме property
    y: 6, // "key: value" -> целият ред наричаме property
    z: true,
    v: undefined,
    b: [1, 2, 3, 4],
    a: null,
    q: { name: 'Boris', age: 32 },
    sum: function () {
        return this.x + this.y; //functions in Objects we call method
    },
    speak: function (message) {
        console.log(message); //functions in Objects we call method
    },
};
console.log('-------------------');

//-------------------------------------------------------------------------------------------------

// ДОСТЪПВАНЕ НА СТОЙНОСТИТЕ на обект
let property = 'x';
console.log(obj1.x); // v1.0
console.log(obj1[property]); // v2.0 - използва се за динамичен начин
// ["x"] = .x
console.log(obj1.sum());
obj1.speak('My name is Boris');
console.log('-------------------');

//-------------------------------------------------------------------------------------------------

// v1.0 - ДОБАВЯНЕ на ключ със стойност към обекет
let dog = {};
dog.name = 'Tosho'; // търси даденият ключ и ако го няма го създава със стойност дадената стойност
dog.name = 'Borko'; // търси даденият ключ и ако съществува презаписва новата стойност (старата я изтрива)
dog.age = 12; // създаваме нов ключ със стойност "12"
dog.bark = function () {
    console.log(`I am ${this.name} on ${this.age} y/o!`);
};
dog.bark(); //извиква функцията на обект dog, която изкарва тест "wof wof wof"

// v2.1 - ДОБАВЯНЕ на ключ със стойност към обекет
function personInfo1(firstName, lastName, age) {
    const person1 = {};
    person1.firstName = firstName;
    person1.lastName = lastName;
    person1.age = age;
    return person1;
}

// v2.2 - ДОБАВЯНЕ на ключ със стойност към обекет
function personInfo2(firstName, lastName, age) {
    const person2 = {
        firstName, // съкратен вариант на firstName: firstName, -> КОГАТО ИМЕТО НА КЛЮЧА И ИМЕТО НА СТОЙНОСТТА СЪВПАДАТ
        lastName, // съкратен вариант на lastName: lastName, -> КОГАТО ИМЕТО НА КЛЮЧА И ИМЕТО НА СТОЙНОСТТА СЪВПАДАТ
        age, // съкратен вариант на firstName: firstName, -> КОГАТО ИМЕТО НА КЛЮЧА И ИМЕТО НА СТОЙНОСТТА СЪВПАДАТ
    };
    return person2;
}

console.log(personInfo1('Boris', 'Todorov', 32));
console.log(personInfo2('Todor', 'Borisov', 65));
console.log('-------------------');

// v3.0 - динамично ДОБАВЯНЕ на ключ със стойност към обекет
let catNames = ['Tom', 'Garfield', 'Charly'];
let cat = {};
catNames.forEach((name) => (cat[name] = 0)); // здаваме в обекта cat нови ключове, използвайки динамично елемнтите на масива catNames;
console.log(cat);
console.log('-------------------');

//-------------------------------------------------------------------------------------------------

// Функции при обектите -> или както се наричат МЕТОДИ
