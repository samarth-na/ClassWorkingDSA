const list = [2, 3, 4, 6, 7, 2, 1];
let key = 7;

const linear_search = list.includes(key);

// console.log("the linear search is : ", linear_search);

if (!linear_search) {
    console.log("the target is not present in the gibven list ");
} else {
    console.log("the target is present in the given list ");

}
