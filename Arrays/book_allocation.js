function isvalid(arr, no_of_student, mid) {
  let stu = 1;
  let pages = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > mid) return false;
    if (pages + arr[i] <= mid) {
      pages += arr[i];
    } else {
      stu++;
      pages = arr[i];
    }
  }
  return stu <= no_of_student;
}

function book_allocation(arr, no_of_student, no_of_book) {
  let sum = 0;
  let ans = -1;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let start = 0;
  let end = sum;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (isvalid(arr, no_of_student, mid)) {
      ans = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return ans;
}

let arr = [2, 1, 3, 4];
let no_of_student = 2;
let no_of_book = arr.length;

console.log(book_allocation(arr, no_of_student, no_of_book));
