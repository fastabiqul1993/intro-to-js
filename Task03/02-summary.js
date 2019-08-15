function splitNum(arr) {
  return arr.toString().split('')
}

function summary(input) {
  let total = 0

  input.map(function(num) {
     return total += num
  })

  let splitTotal = splitNum(total)

  do {
    let result = 0

    splitTotal.map(function(num) {
      return result += parseInt(num)
    })

    splitTotal = splitNum(result)

    return result
  }  while(splitTotal.length > 1)
}

console.log(summary([5,2,3,1,2,2,5,6,7,10]));
