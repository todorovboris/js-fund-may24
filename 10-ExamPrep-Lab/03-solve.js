function solve(arr) {
    let n = arr.shift();
    let cars = {};

    // console.log(n);
    // console.log(arr);

    for (let i = 1; i <= n; i++) {
        cars.name = arr.shift();
    }

    console.log(cars);
}

solve([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop',
]);
