function factorial(n) {
  if(n===0 || n===1){    
    return 1;
  }
  let m = 1
  for (; n>1; n--){    
    m = m * n;
  }
    return m;
}
console.log(factorial(2));