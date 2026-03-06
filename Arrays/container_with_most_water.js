function container_with_most_water(arr, n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let ht = Math.min(arr[i], arr[j]);
      let width = j - i;
      let area = ht * width;
      ans = Math.max(ans, area);
    }
  }
  return ans;
}

function two_pointer_approach(arr, n) {
  let lp = 0,
    rp = n - 1,
    ans = 0,
    width,
    ht,
    area;

  while (lp < rp) {
    width = rp - lp;
    ht = Math.min(arr[lp], arr[rp]);
    area = width * ht;
    ans = Math.max(area, ans);
    arr[lp] < arr[rp] ? lp++ : rp--;
  }

  return ans;
}

let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let n = arr.length;

console.log(container_with_most_water(arr, n));

console.log(two_pointer_approach(arr, n));
