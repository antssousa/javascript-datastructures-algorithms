const { Graph } = PacktDataStructuresAlgorithms;
const { depthFirstSearch } = PacktDataStructuresAlgorithms;
const { DFS } = PacktDataStructuresAlgorithms;

let graph = new Graph();

let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log('********* printing graph ***********');

console.log(graph.toString());

console.log('********* dfs with callback ***********');

const printNode = value => console.log('Visited vertex: ' + value);

depthFirstSearch(graph, printNode);

console.log('********* topological sort - DFS ***********');

graph = new Graph();

myVertices = ['A', 'B', 'C', 'D', 'E', 'F'];
for (i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('F', 'E');

const result = DFS(graph);
console.log(result.discovery);
console.log(result.finished);
console.log(result.predecessors);

const fTimes = result.finished;
s = '';
for (let count = 0; count < myVertices.length; count++) {
  let max = 0;
  let maxName = null;
  for (i = 0; i < myVertices.length; i++) {
    if (fTimes[myVertices[i]] > max) {
      max = fTimes[myVertices[i]];
      maxName = myVertices[i];
    }
  }
  s += ' - ' + maxName;
  delete fTimes[maxName];
}
console.log(s);