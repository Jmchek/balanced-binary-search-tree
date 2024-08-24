import Node from "./Node.js";

export default function Tree() {
    let root = null;

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
      return root;
    }

    function insert(value) {
      
      // console.log(root)
      const parent = root;
      // console.log(root);
      if (root === null){
        return Node(value);
      }
          
    
      if (root.data === value){
        return root;
      }
        
          
      if (value < root.data){
        root = root.left;
        // console.log(root);
        root = insert(value);
      } else if (value > root.data){
        root = root.right;
        // console.log(root);
        root = insert(value);
      }

      // console.log(root);
      // console.log(parent.left);

      // console.log("this triggers")
      
      // prettyPrint(parent);
      return root;
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
     

    return {root,buildTree, prettyPrint, sortAndRemoveDuplicates, insert};
}