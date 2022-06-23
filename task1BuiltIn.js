function palindrome(input) {
    let lowerInput = input.toLowerCase().split('');
    let newInput = lowerInput.join('')
    let result = [...newInput].reverse().join('')

    if(newInput == result) {
        return console.log('palindrome');
    }else {
        return console.log('Not a palindrome');
    }
}
palindrome('hujan')