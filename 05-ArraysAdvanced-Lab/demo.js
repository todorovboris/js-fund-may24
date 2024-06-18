const strArr = ['name', 'advice', 'candy', 'basket', 'return'];
const numsArr = [14, 5, 6, 2, 10, 55, 1, 310];

// strArr.sort((a, b) => a.localeCompare(b));
// strArr.sort((a, b) => b.localeCompare(a));

// numsArr.sort((a, b) => a - b);
numsArr.sort((a, b) => b - a);

console.log(strArr);
console.log('-----------');
console.log(numsArr);