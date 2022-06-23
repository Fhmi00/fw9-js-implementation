const divideAndSort = input => {
    const inputToString = input.toString();
    const lengthInput = inputToString.length;
    const nuArray = [];

    for(let i = 0; i < lengthInput; i++){
        nuArray.push(inputToString[i])
        // if(inputToString[i] == 0){
        //     break;
        // }
        // continue;
    }

    return nuArray;
}

console.log(divideAndSort(5956560159466056));