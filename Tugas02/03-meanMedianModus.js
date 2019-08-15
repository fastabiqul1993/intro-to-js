let nums = [8,8,1,2,2]

//Mean
function findMean () {

  let total = 0
  let sum = nums.map(function(num) {
    total += num
  })
  
  return total /= nums.length
}

//Median
function findMedian() {

  let median = 0
  let numlen = nums.length
  
  let sorted = nums.sort(function(a,b) {
    return a - b
  })

  if(numlen % 2 === 0) //find even 
  {
    median = (sorted[numlen / 2 -1] + sorted[numlen / 2]) /2
  } 
  else  //find odds
  {
    median = sorted[(numlen -1) /2]
  }

  return median
}

//Modus
function findModus() {

  let mod = []
  let count = []
  let result = []

  for (let i = 0; i < nums.length; i++) {
    
    let index = mod.indexOf(nums[i])
    if(index === -1) {
      mod.push(nums[i])
      count.push(1)
    } else  {
      count[index]++
    }
  }

  let maximum = Math.max(...count)
  
  for (let i = 0; i < count.length; i++) {
    
    if(count[i] === maximum) {
      result.push(mod[i])
    }
  }

  return result
}

console.log(findMean());
console.log(findMedian());
console.log(findModus());

