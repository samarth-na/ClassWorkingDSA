function merge(arr1, arr2, arr3) {
  for (let i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i]);
  }
  for (let j = 0; j < arr2.length; j++) {
    arr3.push(arr2[j]);
  }
  return arr3;
}

function merge_thorugg_short(a, a2, a3) {
  a3.push(...a, ...a2);
  return a3;
}

function sort_and_merge(a, a2, m, n) {
  for (let i = m, j = 0; j < n; i++, j++) {
    a.push(a2[j]);
  }
  a.sort((a, b) => a - b);
  return a;
}
const arr1 = [2, 3, 4, 10, 6];
const arr2 = [7, 8, 9];
const arr3 = [];

// // console.log("the merge array is");
// // console.log(merge(arr1, arr2, arr3));

console.log("the merge array is 1 ");
console.log(merge_thorugg_short(arr1, arr2, arr3));

// console.log("the merge array is 1 ");
// console.log(sort_and_merge(arr1, arr2, arr1.length, arr2.length));
