function sorting(arr) {
    let resultArr = [];
    const arrSorted = arr.sort((a, b) => b - a);
    // console.log(arrSorted);

    while (arrSorted.length > 0) {
        resultArr.push(arr.shift());
        resultArr.push(arr.pop());
    }

    console.log(resultArr.join(' '));
}

// sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
