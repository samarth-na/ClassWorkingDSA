function pattern2(n) {
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= i - 1; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

function pattern3(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(j + " ");
    }
    console.log();
  }
}

function pattern4(n) {
  let nu = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(nu + " ");
      nu++;
    }
    console.log();
  }
}

function pattern5(n) {
  let nu = "A";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(nu + " ");
      nu = String.fromCharCode(nu.charCodeAt(0) + 1);
    }
    console.log();
  }
}

function pattern6(n) {
  for (let i = 0; i < n; i++) {
    for (let space = 0; space < i; space++) {
      process.stdout.write(" ");
    }
    for (let j = 0; j < n - i; j++) {
      process.stdout.write(i + 1);
    }
    console.log();
  }
}

console.log("the triangle pattern is :");
pattern2(5);
console.log("the triangle pattern is :");
pattern3(5);
pattern2(5);
console.log("the triangle pattern is :");
pattern4(5);
console.log("the triangle pattern is :");
pattern5(5);
console.log("the triangle pattern is :");
pattern6(5);
