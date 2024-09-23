import Tree from "./Tree.js";

const test = Tree();

let someArr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324, 33];
let randomArr = [
    24,  7,  2, 14, 37, 21, 22,  4, 34, 36,
    10,  6, 38, 31,  5,  7, 39, 37, 14, 32,
     5, 11, 11, 15, 12,  5, 23, 20, 24,  1,
    11, 33, 29,  2, 22, 15,  9, 16,  3, 16,
    11, 28, 37, 31
  ];  


test.buildTree(randomArr);

console.log(test.prettyPrint(test.getRoot()));

console.log(test.isBalanced());

console.log(test.inOrder(test.printToConsole));
console.log(test.preOrder(test.printToConsole));
console.log(test.postOrder(test.printToConsole));


test.insert(17);
test.insert(18);
test.insert(19);

console.log(test.isBalanced());


test.rebalance();

console.log(test.isBalanced());

console.log(test.prettyPrint(test.getRoot()));


console.log(test.inOrder(test.printToConsole));
console.log(test.preOrder(test.printToConsole));
console.log(test.postOrder(test.printToConsole));