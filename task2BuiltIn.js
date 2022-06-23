const reverseWords = (sentence) => {

    const words = sentence.split(" ")
    const revWords = words.reverse()
    console.log(revWords);
    // return revWords.join(" ")
}

console.log(reverseWords("Iam studying Javascript"))