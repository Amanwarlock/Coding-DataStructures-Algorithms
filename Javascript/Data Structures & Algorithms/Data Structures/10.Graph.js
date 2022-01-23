class Graph { 
    constructor() { 
      this.numberOfNodes = 0; 
      this.adjacentList = {}; 
    } 
    addVertex(node)  { 
      this.adjacentList[node] = []; 
      this.numberOfNodes++;
    } 
    addEdge(node1, node2) { 
      //uniderected Graph 
      this.adjacentList[node1].push(node2); 
      this.adjacentList[node2].push(node1); 
    } 
    showConnections() { 
      const allNodes = Object.keys(this.adjacentList); 
      for (let node of allNodes) { 
        let nodeConnections = this.adjacentList[node]; 
        let connections = ""; 
        let vertex;
        for (vertex of nodeConnections) {
          connections += vertex + " ";
        } 
        console.log(node + "-->" + connections); 
      } 
  } 
  } 
  
  var myGraph = new Graph();
  myGraph.addVertex('0');
  myGraph.addVertex('1');
  myGraph.addVertex('2');
  myGraph.addVertex('3');
  myGraph.addVertex('4');
  myGraph.addVertex('5');
  myGraph.addVertex('6');
  myGraph.addEdge('3', '1'); 
  myGraph.addEdge('3', '4'); 
  myGraph.addEdge('4', '2'); 
  myGraph.addEdge('4', '5'); 
  myGraph.addEdge('1', '2'); 
  myGraph.addEdge('1', '0'); 
  myGraph.addEdge('0', '2'); 
  myGraph.addEdge('6', '5');
  
  myGraph.showConnections(); 

  /**
   *------------------------------------------------------------------------------------------------------------------------------------------------------
   *@description BFS and DFS using Adjacency list 
   */

  const adjacencyList = [
    [1, 3],
    [0],
    [3, 8],
    [0, 2, 4, 5],
    [3, 6],
    [3],
    [4, 7],
    [6],
    [2]
  ];
  
  const traversalBFS = function(graph) {
    const seen = {};
    const queue = [0];
    const values = [];
  
    while(queue.length) {
      const vertex = queue.shift();
      
      values.push(vertex);
      seen[vertex] = true;
  
      const connections = graph[vertex];
      for(let i = 0; i < connections.length; i++) {
        const connection = connections[i];
        if(!seen[connection]) {
          queue.push(connection);
        }
      }
    }
  
    return values;
  }
  
  console.log(traversalBFS(adjacencyList));
//---------------------------------------------------------------------------------------

  const traversalDFS = function(vertex, graph, values, seen) {
    values.push(vertex);
    seen[vertex] = true;
  
    const connections = graph[vertex];
    for(let i = 0; i < connections.length; i++) {
      const connection = connections[i];
  
      if(!seen[connection]) {
        traversalDFS(connection, graph, values, seen);
      }
    }
  }
  
  const values = [];
  traversalDFS(0, adjacencyList, values, {})
  
  console.log(values);


  /**
   *------------------------------------------------------------------------------------------------------------------------------------------------------
   *@description BFS and DFS using Adjacency Matrix 
   */

  const adjacencyMatrix = [
    [0, 1, 0, 1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0]
  ];
  
  const traversalBFS2 = function(graph) {
    const seen = {};
    const queue = [0];
    const values = [];
  
    while(queue.length) {
      const vertex = queue.shift();
      
      values.push(vertex);
      seen[vertex] = true;
  
      const connections = graph[vertex];
      for(let v = 0; v < connections.length; v++) {
        if(connections[v] > 0 && !seen[v]) {
          queue.push(v);
        }
      }
    }
  
    return values;
  }
  
  console.log(traversalBFS2(adjacencyMatrix));

  //-------------------------------------------------------------------------------------------------------

  const traversalDFS2 = function(vertex, graph, values, seen) {
    values.push(vertex);
    seen[vertex] = true;
  
    const connections = graph[vertex];
    for(let v = 0; v < connections.length; v++) {
      if(connections[v] > 0 && !seen[v]) {
        traversalDFS(v, graph, values, seen);
      }
    }
  }
  
  const values2 = [];
  traversalDFS2(0, adjacencyMatrix, values2, {})
  
  console.log(values2);