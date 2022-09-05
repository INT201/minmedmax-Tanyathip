const { template } = require('@babel/core')

function minMedMax(n1,n2,n3){
  const seekValue = [n1,n2,n3]
  let maxValue = seekValue[0]
  let minValue = seekValue[0]
  let midValue = seekValue[0]

// find Max Value
  for(const value of seekValue){
      if(value > maxValue){
          maxValue = value;
      }
  }


// find Min value
  for(const value of seekValue){
      if(value < minValue){
          minValue = value;
      }
  }

// find mid value
  for(const value of seekValue){
      if(value != minValue && value != maxValue){
          midValue = value
      }
      if(n1 === n2){
          midValue = n1
      }

      if(n1 === n3){
          midValue = n1
      }

      if(n2 === n3){
          midValue = n2
      }
  }
  // console.log(`min:${minValue},mid:${midValue},max: ${maxValue}`)
  return {min: minValue, mid: midValue, max: maxValue}

  
}

module.exports = minMedMax
