function exe01(year){
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        console.log("yes");
    } else {
        console.log("no");
    }

}

exe01(1984);
exe01(2003);
exe01(4);