import Node from "./Node.js";

export default function Tree() {
    let root = null;
    let parent = root;

    const getRoot = () => {
      return root;
    }

    const buildTree = (array) => {
      array = sortAndRemoveDuplicates(array);
      let start = 0;
      let end = array.length - 1;

      if (start > end)
        {
            return null;
        }

      let mid = parseInt((start + end) / 2);
      let node = Node(array[mid]);

      node.left = buildTree(array.slice(start, mid));
      node.right = buildTree(array.slice(mid + 1, end + 1));
      root = node;
      parent = root;
      return root;
    }

    function insert(value, currentNode = root) {
      if (currentNode === null)
        return new Node(value);
            
      if (currentNode.data === value)
          return currentNode;
          
      if (value < currentNode.data)
          currentNode.left = insert(value, currentNode.left);
      else if (value > currentNode.data)
          currentNode.right = insert(value, currentNode.right);

      return currentNode;
  }

    const compareNumbers = (a, b) => {
      return a - b;
    }

    const sortAndRemoveDuplicates = (arr) => {
      arr.sort(compareNumbers);

      return arr.filter((item,
          index) => arr.indexOf(item) === index);
    }

    const prettyPrint = (node, prefix = "", isLeft = true) => {

        if (node === null) {
          return;
        }
        if (node.right !== null) {
          prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
          prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
      };
     

    return {getRoot, buildTree, prettyPrint, sortAndRemoveDuplicates, insert};
}