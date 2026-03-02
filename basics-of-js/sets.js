// sets in the js is the uniqu key values and can be written in any type alike array string or object etc
const s1 = new Set([10, 20, 20, 10, 30]);
console.log(s1);

const s2 = new Set(["array", "array", "string"]);
console.log(s2);

const s3 = new Set("");
console.log(s3);

//functions in the sets
s3.add("20000");
console.log(s3);

s1.delete(10);
console.log(s1);

const show_entries = s2.entries();
console.log(show_entries.next().value);
console.log(show_entries.next().value);

const show = s1.has(20);
if (!show) {
  console.log("not ");
} else {
  console.log("yes");
}

const sss = new Set(["muskan", "hello", "samarth"]);
sss.forEach((value) => {
  console.log(value);
});

function setValue(value1, value2, mySet) {
  console.log(`s[${value1}] = ${value2}`);
}

new Set(["Chicago", "California", undefined]).forEach(setValue);
