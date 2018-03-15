
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
function isPerfect(x, array){
  let sum=0;
  for (let a of array){
    sum+=a
  }
  if (sum == x)
    return true

  return false

}

console.log(isPerfect(28, properDivisors(28)));
//function isAbundantnumber

//function isDeficient
