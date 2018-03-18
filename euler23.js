console.log(AddOfNonAbundantAdditionsBelow(50000));

//function for proper divisor --> returns array with all proper divisors of a number x
function properDivisors(x){
  let res = []
  let half = Math.floor(x/2)
  for (let i = half; i>0; i--){
    if (x%i == 0)
      res.push(i)
  }
  return res
}

//function to store proper divisors of numbers between 1 - x.  -> Returns and object with arrays
function storeProperDivs(x){
  let propDivs = {}

  for (let i = x; i>0; i--){
      propDivs[i] = properDivisors(i)
  }
  return propDivs;
}

//function isAbundant returns 1 if x abundat, -1 deficient, 0: perfect. Takes a proper divisors array for that number
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

//function that evaluates if a number is an addition of abundants. --> returns boolean.
//Takes optional object that stores properDiviors arrays for all numbers between 1 and x (for efficiency)
function additionOfAbund(x, obj){
  let sumAbundant = false
  //addition combinations
  for(let a = x-1, b=1; a>=b; a--, b++){
    let propersA, propersB;
    if (obj){
      propersA = obj[a];
      propersB = obj[b];
    } else {
      propersA = properDivisors(a);
      propersB = properDivisors(b);
    }

    if(isAbundant(a,propersA) == 1 && isAbundant(b, propersB) == 1){
      sumAbundant = true
      break
    }
  }
  return sumAbundant;
}

function AddOfNonAbundantAdditionsBelow(x){
 //store all proper divisors in object first instead of calculating them every time (efficiency)
  properDivsObj = storeProperDivs(x);

  let res = []
  for (let i = x; i>0; i--){
    if (additionOfAbund(i, properDivsObj)==false){
      res.push(i);
    }
  }

  let total = 0;
  for (let s of res){
    total += s
  }

  return total;
}




//function that analyzes independent number of addition combinations
//If a number has two abundant return false
