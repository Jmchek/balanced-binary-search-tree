import Tree from "./Tree.js";

const test = Tree();

let someArr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let someSmallArr = [1,2,3,4,5];

// let start = 0;
// let end = someSmallArr.length - 1;

// let mid = parseInt((start + end) / 2);


// console.log(test.buildTree(test.sortAndRemoveDuplicates(someSmallArr)));
// console.log(test.sortAndRemoveDuplicates(someSmallArr))

// console.log(test.buildTree(someArr))
// test.buildTree(someArr);
test.buildTree(someArr);
test.insert(6);

console.log(test.prettyPrint(test.getRoot()));
test.deleteItem(4);
console.log(test.prettyPrint(test.getRoot()));

console.log(test.find(324));


// console.log(test.buildTree(someSmallArr));
// console.log(test.prettyPrint(test.buildTree(someSmallArr)));

// console.log(test.root);
// console.log(someSmallArr.slice(mid + 1, end + 1));

// test.buildTree([1,2]);