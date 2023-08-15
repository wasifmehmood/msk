const isAnagram = (word, newWord) => {
    word = word.replace(' ', '').toLowerCase();
    newWord = newWord.replace(' ', '').toLowerCase();
    if (word.length !== newWord.length) return false;
    let wordArrSum = 0;
    let newWordArrSum = 0;
    for(let i=0; i< word.length; i++) {
        wordArrSum += word.charCodeAt(i);
        newWordArrSum += newWord.charCodeAt(i);
    }

    if(wordArrSum === newWordArrSum) {
        return true;
    }

    return false;
}

console.time('test')
console.log('1 Should be true', isAnagram('listen', 'silent'));
console.log('2 Should be true', isAnagram('rail safety', 'fairy tales'));
console.log('3 Should be true', isAnagram('debit card', 'bad credit'));
console.log('4 Should be true', isAnagram('Dormitory', 'dirty room'));
console.log('5 Should be true', isAnagram('funeral', 'real fun'));
console.log('6 Should be true', isAnagram('astronomer', 'moon starer'));
console.log('7 Should be true', isAnagram('listen', 'silent'));
console.log('8 Should be true', isAnagram('presbyterians', 'britney spears'));
console.log('9 Should be true', isAnagram('eleven plus two', 'twelve plus one'));
console.log('Should be true', isAnagram('123', '321'));
console.timeEnd('test')