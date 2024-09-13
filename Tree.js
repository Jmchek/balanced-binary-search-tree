import Node from "./Node.js";

export default function Tree() {
    let root = null;

    const getRoot = () => {
      return root;
    }

    const getRootPlusOne = () => {
      return root.left;
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

    function getSuccessor(curr) {
      curr = curr.right;
      while (curr !== null && curr.left !== null) {
          curr = curr.left;
      }
      return curr;
    }

    function deleteItem(x, currentNode = root) {
        if (currentNode === null) {
            return currentNode;
        }

        if (currentNode.data > x) {
            currentNode.left = deleteItem(x, currentNode.left);
        } else if (currentNode.data < x) {
            currentNode.right = deleteItem(x, currentNode.right);
        } else {
            if (currentNode.left === null) 
                return currentNode.right;

            if (currentNode.right === null) 
                return currentNode.left;

            let succ = getSuccessor(currentNode);
            currentNode.data = succ.data;
            currentNode.right = deleteItem(succ.data, currentNode.right);
        }
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

      const find = (value, currentNode = root) => {
        let foundNode;

        if (currentNode === null) {
          return currentNode;
        }

        if (currentNode.data > value) {
            foundNode = find(value, currentNode.left);
        } else if (currentNode.data < value) {
            foundNode = find(value, currentNode.right);
        } else if (currentNode.data === value){
          return currentNode;
        }
        return foundNode;
      }

      const levelOrder = (callback, currentNode = root, Q = []) =>  {
        if(callback === undefined) throw new Error('Please provide a callback function as a parameter.');
        if(currentNode === null) return;
        
        Q.push(currentNode);  

        while(Q !== undefined || Q.length !== 0) {
          currentNode = Q.pop();

          callback(currentNode);

          if(currentNode.left !== null) Q.unshift(currentNode.left);
          if(currentNode.right !== null) Q.unshift(currentNode.right);
        }
      }

      const levelOrderRecursive = (callback) => {
        if(callback === undefined) throw new Error('Please provide a callback function as a parameter.');

        let result = []
    
         function lot(node, l){
             if(!node) return; 
    
             if (result[l]){
                 result[l].push(node)
             } else {
                 result[l] = [node]
             }
    
             lot(node.left, l+1)
             lot(node.right, l+1)
         }
    
         lot(root, 0);

         for(var i = 0; i < result.length; i++){
            for(var j = 0; j < result[i].length; j++){
        
                callback(result[i][j]);
            }
          }
        
         return result
    }

      const printToConsole = (someNode) => {
        console.log(someNode);
      }

      const inOrder = (callback, currentNode = root, Q = []) =>  {
        if(callback === undefined) throw new Error('Please provide a callback function as a parameter.');
        if(currentNode === null) return;

        inOrder(callback, currentNode.left, Q);

        callback(currentNode);
        Q.push(currentNode.data);
        
        inOrder(callback, currentNode.right, Q);

        return Q;

      }

      const preOrder = (callback, currentNode = root, Q = []) =>  {
        if(callback === undefined) throw new Error('Please provide a callback function as a parameter.');
        if(currentNode === null) return;

        callback(currentNode);
        Q.push(currentNode.data);

        preOrder(callback, currentNode.left, Q);
        
        preOrder(callback, currentNode.right, Q);

        return Q;

      }

      const postOrder = (callback, currentNode = root, Q = []) =>  {
        if(callback === undefined) throw new Error('Please provide a callback function as a parameter.');
        if(currentNode === null) return;

        
        postOrder(callback, currentNode.left, Q);
        
        postOrder(callback, currentNode.right, Q);

        callback(currentNode);
        Q.push(currentNode.data);

        return Q;

      }

      const height = (currentNode = root, level = 0, result = []) =>  { 

        if(!currentNode) return; 

    
        if (result[level]){
            result[level].push(currentNode.data)
        } else {
            result[level] = [currentNode.data]
        }

        height(currentNode.left, level+1, result);
        height(currentNode.right, level+1, result);


        return result.length;
      }

      const depth = (someNode, currentNode = root, level = 0, result = [], foundData = someNode.data) =>  { 
        let depthCount;

        if(!currentNode) return; 
    
        if (result[level]){
          if(currentNode.data == foundData){
            result[level].push("node is here");
          }
            result[level].push(currentNode.data)
        } else {
          
            result[level] = [currentNode.data];
            if(currentNode.data == foundData){
              result[level].push("node is here");
            }
        }

        depth(someNode, currentNode.left, level+1, result, foundData);
        depth(someNode, currentNode.right, level+1, result, foundData);

        for(var i = 0; i < result.length; i++){
          for(var j = 0; j < result[i].length; j++){
      
              if(result[i][j] == "node is here"){
                depthCount = i;
              }
          }
        }
        return depthCount;
      }
     

    return {getRootPlusOne, depth, height, postOrder, preOrder, inOrder, levelOrderRecursive, printToConsole, levelOrder, find, deleteItem, getRoot, buildTree, prettyPrint, sortAndRemoveDuplicates, insert};
}