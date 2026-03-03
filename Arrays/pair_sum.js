function pair_sum_brute_force(arr, target) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        res.push(arr[i], arr[j]);
        return res;
      }
    }
  }
  return [-1, -1];
}

function moons_voting_algo(arr, target) {
  let sum = 0;
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    sum = arr[start] + arr[end];
    if (sum > target) {
      end--;
    } else if (sum < target) {
      start++;
    } else {
      return [arr[start], arr[end]];
    }
  }
  return [-1, -1];
}
let arr = [1, 2, 3, 4, 5];
let target = 5;
console.log(pair_sum_brute_force(arr, target));

console.log(moons_voting_algo(arr, target));
