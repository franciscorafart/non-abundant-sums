
//function for proper divisor --> array
function properDivisors(x){
  let res = []
  let half = Math.floor(x/2)
  console.log(half)
  for (let i = half; i>0; i--){
    if (x%i == 0)
      res.push(i)
  }
  return res
}

console.log(properDivisors(28))
//function isAbundantnumber

//function isDeficient
