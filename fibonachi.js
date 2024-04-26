function fibonachi(n) {
  let fib = [0, 1];
  for (let index = 2; index < n; index++) {
    fib[index] = fib[index - 1] + fib[index - 2];
  }
  return fib;
}
// console.log(fibonachi(2));
// console.log(fibonachi(3));
// console.log(fibonachi(7));
// let Array = [1, 2, 3, 4, 5];
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}
// // result =1
console.log(factorial(0)); //1
console.log(factorial(1)); //1
console.log(factorial(5)); //120
console.log(factorial(6)); //720
console.log(factorial(7)); //5040
