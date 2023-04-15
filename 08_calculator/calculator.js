const add = function(a,b) {
  let sum = a+b;
  return sum;
	
};

const subtract = function(a,b) {
  let sub = a -b;
  return sub;
	
};

const sum = function(arr) {
  let sum =0;
  for(let i =0; i<arr.length;i++)
    
  sum += arr[i];
  return sum;
	
};

const multiply = function(arr) {
  let sum =1;
  for(let i =0; i<arr.length;i++)
  sum =sum* arr[i];
  return sum;

};

const power = function(a,b) {
  let sum = a **b;
  return sum;
	
};

const factorial = function(n) {
  if(n < 0){
    return "number has to be positive."
}

//base case
if(n == 0 || n == 1){
    return 1;
//recursive case
}else{
    return n * factorial(n-1);
}

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
