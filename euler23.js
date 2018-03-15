//function for proper divisor --> array
function properDivisors(x){
  let res = []
  let half = Math.floor(x/2)
  for (let i = half; i>0; i--){
    if (x%i == 0)
      res.push(i)
  }
  return res
}

//function abundance 1: abundance, -1 deficient, 0: perfect
function isAbundant(x, array){
  let sum=0;
  for (let a of array){
    sum+=a
  }
  if (sum == x)
    return 0;
  else if (sum > x)
    return 1;
  else
    return -1;
}
