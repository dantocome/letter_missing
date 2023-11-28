function missingLetter(arrOfletter){
    const alphabets = ['a','b','c','d','e','f','g','h','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for(let i=1; i<alphabets.length; i++){
        let letter = alphabets[i];
        if(!arrOfletter.includes(letter)){
            return letter;
        }
    }
    return alphabets;
}

console.log(missingLetter(['a','c']));