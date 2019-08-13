let nums = [1,1,2,2,3,3,4,5]

//Mean
function findMean () {

  let sum = 0

  for(let i=0; i<nums.length; i++) {
    sum += nums[i]
  }
  
  return sum /= nums.length
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

  let numlen = nums.length
  let temporary = 0
  let result = []
  // let finalResult = (result)

  for(let i=0; i<numlen; i++) {
    let counter = 0
    for(let j=0; j<numlen; j++) {

      if(nums[i] === nums[j]) {
        counter += 1
      }
    }

    if(counter >= temporary) {
      temporary = counter
      result.push(nums[i])
    }
  }

  return [...new Set(result)].join(',')
}

console.log(findMean());
console.log(findMedian());
console.log(findModus());

