function pattern1(a) {
  for (let i = 1; i <= a; i++) {
    for (let j = 1; j <= a; j++) {
      process.stdout.write(j + " ");
    }
    console.log();
  }
}

function pattern2(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

function pattern3(n) {
  let nu = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      process.stdout.write(nu + " ");
      nu++;
    }
    console.log();
  }
}
function pattern4(n) {
  for (let i = 0; i < n; i++) {
    let nu = 1;
    for (let j = 0; j < n; j++) {
      process.stdout.write(nu + " ");
      nu++;
    }
    console.log();
  }
}

console.log("the first pattern is ");
pattern1(5);
console.log("the second pattern is ");
pattern2(5);
console.log("the fourth pattern is ");
pattern3(4);
console.log("the fifth pattern is ");
pattern4(4);
