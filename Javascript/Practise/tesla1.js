/**
 * 
 *     Directory--
 *            File
 *            Directory
 *                   File        
 * 
 * 
 * 
 *     Accessibility
 *     
 *     Graph - [1] --> [2,3,4]  // BFS DFS
 *     
 *     Tree --> N-ary tree
 *            
 *                   P
 *     
 *     c1            c2                  c3
 * 
 * c4         c5            c6                   c7
 *     
 *                                                      c6
 * 
 * 
 *     T: O(h) --> Recurrsive depth for searcg
 * 
 *                          1
 *            2             3              4
 *                                               5
 *                                           7          6
 */


class Node {
       fileName;
       children;
       type;
       constructor(val){
              this.fileName = val;
              this.children = [];
       }
}


class Tree{
       root;
       constructor(root){
              this.root;
       }

       dfs(node){
              
              if(node === null){
                     return
              }


              if(node.children.length === 0){
                     return {
                            fileName: [],
                            height: -1
                     }
              }

              let deepestNode = {
                     fileName: [],
                      height: -1
              };

              for(let child = 0; child < node.children.length; child++){
                    let obj = this.dfs(node.children[child]);
                    obj.height += 1;
                    if(obj.height >= deepestNode.height){
                            deepestNode.height = obj.height;
                    }
              }

              console.log(deepestNode);

             // deepestNode.height += 1;

              return deepestNode;
       }
}



const root = {
       fileName: 1,
       children: [ {
              fileName: 2,
              children: []
       }, {
              fileName: 3,
              children: []
       }, {
              fileName: 4,
              children: [{
                     fileName: 5,
                     children: [{
                            fileName: 6,
                            children: []
                     }]
              }]
       }]
}


const nTree = new Tree(root);

console.log("Result : ", nTree.dfs(root));
