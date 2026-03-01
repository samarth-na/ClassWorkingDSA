function bs(arr, key) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === key) {
            return mid;
        } else if (arr[mid] < key) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}


const arr = [2, 4, 6, 8, 10]
const key = 8;
const inderx = bs(arr, key);

if (inderx >= 0) {
    console.log("element is found at : ", inderx);
} else {
    console.log("the element is not found");

}

