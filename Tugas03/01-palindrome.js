function isPalindrome(words) {
  let arrBolean = []

  words.map(function(wordData) {
    let word = wordData.replace(/\s/g, "")
    
    let reverseWord = word.split('').reverse().join('')
    
    if(reverseWord === word) {
      arrBolean.push(true)
    } else {
      arrBolean.push(false)
    }
  })

  return arrBolean
}

console.log(isPalindrome(['katak','k a t a k','katakan']));
