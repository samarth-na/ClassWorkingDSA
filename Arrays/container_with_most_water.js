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

let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let n = arr.length;

console.log(container_with_most_water(arr, n));
