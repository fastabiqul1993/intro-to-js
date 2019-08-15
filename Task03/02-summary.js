function summary(input) {
  let total = 0

  input.map(function(num) {
    total += num
  })

  return total
}

console.log(summary([5,2,3,1,2]));
