function majority_element(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let count = 0;

    for (let j = 0; j < n; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    if (count > n / 2) {
      return arr[i];
    }
  }

  return -1;
}

function majority_ele_opti(arr) {
  let fr = 0,
    ans = 0;
  for (let i = 0; i < arr.length; i++) {
    if (fr === 0) {
      ans = arr[i];
    }
    if (ans === arr[i]) {
      fr++;
    } else {
      fr--;
    }
  }
  return ans;
}

console.log(majority_element([3, 3, 3, 3, 3, 3, 3, 2, 2, 1]));

console.log(majority_ele_opti([3, 3, 3, 3, 3, 3, 3, 2, 2, 1]));
