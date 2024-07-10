const finalProducts = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Jim' },
];

const found = finalProducts.find((user) => user.id === 2);

console.log(found);
