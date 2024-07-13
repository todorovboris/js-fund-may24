function lab(arr) {
    const adressBook = {};

    for (const info of arr) {
        const personInfo = info.split(':');
        const name = personInfo[0];
        const adress = personInfo[1];
        // console.log(personInfo);

        adressBook[name] = adress;
    }

    let adressBookSorted = Object.entries(adressBook);
    adressBookSorted.sort((a, b) => a[0].localeCompare(b[0]));
    // console.log(adressBookSorted);

    for (const person of adressBookSorted) {
        console.log(`${person[0]} -> ${person[1]}`);
    }
}

lab([
    'Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd',
]);
