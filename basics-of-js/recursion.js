function printing_numbers(num) {
  if (num === 0) return;
  console.log(num);
  return printing_numbers(num - 1);
}

function factorial(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
}
printing_numbers(10);
console.log(`the factorial of ${5} is : `, factorial(5));
