// let arr1 = [1, 3, 2, 1, 3, 2, 3];
// let arr2 = [1, 3, 2, 1, 3, 2, 3];
let obj1 = {
    "name": "rahul"
}
let obj2 = {
    "name": "rahul"
}
let set = new Set();
set.add(obj1.name);
set.add(obj2.name);
console.log(set);
console.log(set.has("rahul"));
set.add(1);
set.add(3);
set.add(5);
console.log(set);
console.log(...set);
set.forEach(value => console.log(value));

let males = ["ravi", "rahul", "ravi", "rahul", "rishi", "rahul"];
let females = ["rani", "ramya", "rani", "rani", "ramya"];

// ravi , rahul , rishi , rani , ramya
let gender = [...new Set(males), ...new Set(females)];
console.log(gender);

let setA = new Set([1, 2, 3, 4, 5, 6]);
let setB = new Set([4, 5, 6, 7]);

res = [...setB].filter(ele => setA.has(ele));

console.clear();
console.log(res);

set.clear();

console.log(set);
console.log(set.size);
// ---------------------------------------------------------