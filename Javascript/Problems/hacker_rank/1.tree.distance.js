const test_case = `2
4 2
1 2
1 3
1
3 1
2 3
2`;

class Node {
  constructor(value) {
    this.value = value;
    this.neighbors = []; // array of neighbors
  }
}

class Graph {
  graph = [];
  EDGE_DISTANCE = 6;
  constructor(noOfNodes) {
    this.noOfNodes = noOfNodes;
    this.distArr = new Array(noOfNodes + 1);
    this.distArr.fill(-1);
    //fillArr(this.distArr, -1);
  }

  addNode(value) {
    this.graph[value] = new Node(value);
  }

  addVertex(node1, node2) {
    let node = this.graph[node1];
    node.neighbors.push(node2);
    node = this.graph[node2];
    node.neighbors.push(node1);
  }

  getDistances(startAt) {
    this.distArr[startAt] = 0;
    let queue = [];
    queue.push(this.graph[startAt]);

    while (queue.length) {
      let node = queue.shift();
      //console.log("node poped : ", node);
      for (let i = 0; i < node.neighbors.length; i++) {
        let neighbor = node.neighbors[i];
        if (this.distArr[neighbor] == -1) {
          this.distArr[neighbor] =
            this.distArr[node.value] + this.EDGE_DISTANCE;
          queue.push(this.graph[neighbor]);
        }
      }
    }

    // console.log("Distance Arr : ", this.distArr);
    //console.log("Graph : ", this.graph);

    this.distArr.splice(startAt, 1);
    this.distArr.splice(0, 1);
    return this.distArr.join(" ");
  }
}

function processData(input) {
  //Enter your code here
  let data = input.split("\n");
  while (data && data.length > 1) {
    let inpArr = data;
    const q = +inpArr[0]; // no. of queries;
    const n = +inpArr[1].split(" ")[0]; // number of nodes
    const m = +inpArr[1].split(" ")[1]; // number of edges
    const startAt = +inpArr[1 + m + 1];
    data = data.slice(1 + m + 1 );
    const graph = new Graph(n);

    //add nodes
    for (let i = 1; i <= n; i++) {
      graph.addNode(i);
    }

    // add edges
    for (let i = 0; i < m; i++) {
      let edges = inpArr[i + 2];
      let node1 = edges.split(" ")[0];
      let node2 = edges.split(" ")[1];
      graph.addVertex(node1, node2);
    }

    let result = graph.getDistances(startAt);

    console.log("Result : ", result);
    //return result;
  }
}

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });

// process.stdin.on("end", function () {
//    processData(_input);
// });

processData(test_case);

//process.stdin.emit("data", test_case);
