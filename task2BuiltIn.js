const reverseWords = (sentence) => {

    const words = sentence.split(" ")
    const revWords = words.reverse()
    return revWords.join(" ")
}

console.log(reverseWords("Iam studying Javascript"))