import Tree from "./Tree.js";

const test = Tree();

let someArr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324, 33];
// let someSmallArr = [6, 2, 7, 5, 4, 1, 8, 9, 3, 10, 11];

// let start = 0;
// let end = someSmallArr.length - 1;

// let mid = parseInt((start + end) / 2);


// console.log(test.buildTree(test.sortAndRemoveDuplicates(someSmallArr)));
// console.log(test.sortAndRemoveDuplicates(someSmallArr))

// console.log(test.buildTree(someArr))
// test.buildTree(someArr);
test.buildTree(someArr);
// test.insert(3);
// test.insert(12);
test.insert(13);
test.insert(8);

// console.log(test.prettyPrint(test.getRoot()));
// test.deleteItem(4);
console.log(test.prettyPrint(test.getRoot()));

// console.log(test.depth(test.getRoot()));

console.log(test.isBalanced());

// console.log(test.find(324));
// test.levelOrder();
// console.log(test.postOrder(test.printToConsole));
// console.log(test.levelOrderRecursive());

// console.log(test.buildTree(someSmallArr));
// console.log(test.prettyPrint(test.buildTree(someSmallArr)));

// console.log(test.root);
// console.log(someSmallArr.slice(mid + 1, end + 1));

// test.buildTree([1,2]);