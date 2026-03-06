function rsa(arr, n, target) {
  let start = 0,
    end = n - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) return mid;

    //check the soretd part in, left
    if (arr[start] <= arr[mid]) {
      //search in left half
      if (arr[start] <= target && target <= arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      //right half
      if (arr[mid] <= target && target <= arr[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
}

let arr = [3, 4, 5, 6, 7, 0, 1, 2, 3];
let n = arr.length;
let target = 0;
console.log(rsa(arr, n, target));
