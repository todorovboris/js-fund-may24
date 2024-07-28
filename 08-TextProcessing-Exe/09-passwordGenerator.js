function solve(arr) {
    const wordForReplace = arr[2];
    const concatenatedText = arr[0] + arr[1];

    const vowelRegex = /^[aeiouAEIOU]$/;
    let concatenatedTextArr = concatenatedText.split('');
    let replacementIndex = 0;

    for (let i = 0; i < concatenatedText.length; i++) {
        if (vowelRegex.test(concatenatedTextArr[i])) {
            let replacementChar = wordForReplace[replacementIndex % wordForReplace.length].toUpperCase(); //итерира през всяка буква от 3тата дума на входния масив и я запазва в отделна променлива, като ГЛАВНА
            concatenatedTextArr[i] = replacementChar;
            replacementIndex++;
        } else {
            concatenatedTextArr[i] = concatenatedTextArr[i].toLowerCase();
        }
    }

    let reversePass = concatenatedTextArr.reverse().join('');
    console.log(`Your generated password is ${reversePass}`);
}

solve(['ilovepizza', 'ihatevegetables', 'orange']);
