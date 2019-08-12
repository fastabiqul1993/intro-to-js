let nums = [1,2,3,4,5,2,1,3,5,8]

//Mean
function findMean () {

  let sum = 0

  for(let i=0; i<nums.length; i++) {
    sum += nums[i]
  }
  
  return sum /= nums.length
}

console.log(findMean());

//Median
function findMedian() {

  let median = 0
  let numlen = nums.length
  nums.sort()

  if(numlen % 2 === 0) //find even 
  {
    median = (nums[numlen / 2 -1] + nums[numlen / 2]) /2
  } 
  else  //find odds
  {
    median = nums[(numlen -1) /2]
  }

  return median
}

console.log(findMedian());

//Modus
function findModus() {

  let numlen = nums.length
  let temp = 0
  let result = 0

  for(let i=0; i<numlen; i++) {
    let count = 0
    for(let j=0; j<numlen; j++) {

      if(nums[i] === nums[j]) {
        count += 1
      }
    }

    if(count > temp) {
      temp = count
      result = nums[i]
    }
  }

  return result
}

console.log(findModus());
