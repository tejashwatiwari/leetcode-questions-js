/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 */
var maximumValueSum = function(nums, k, edges) {

  let n = nums.length;
  let g = createRootedTree(createGraph(n, edges), 0);

  function solve(r) {
    let root = g[r];
    let m = root.aNodes.length;

    for (let c of root.aNodes) {
      solve(c);
    }

    let curMax = 0;
    let curMaxK = -1e9;
    let preMax = 0;
    let preMaxK = 0;

    for (let i = 0; i < m; ++i) {
      let c = root.aNodes[i];
      let child = g[c];
      let v = nums[c];
      let vK = v ^ k;

      preMax = curMax;
      preMaxK = curMaxK;

      curMax = Math.max(
        preMax + child.max,
        preMax + child.maxK,
        preMaxK + child.max - v + vK,
        preMaxK + child.maxK - vK + v
      );
      curMaxK = Math.max(
        preMaxK + child.max,
        preMaxK + child.maxK,
        preMax + child.max - v + vK,
        preMax + child.maxK - vK + v
      );
    }

    root.max = curMax + nums[r];
    root.maxK = curMaxK + (nums[r] ^ k);
    if (!root.aNodes.length) root.maxK = -1e9;
  }

  solve(0);
  return Math.max(g[0].max, g[0].maxK);

};
function createGraph(n, edges) {
  let nodes = [];
  for (let i = 0; i < n; i++) nodes.push({ aNodes: [], max: 0, maxK: 0 });

  let m = edges.length;
  for (let i = 0; i < m; i++) {
    let [u, v] = edges[i];
    nodes[u].aNodes.push(v);
    nodes[v].aNodes.push(u);
  }

  return nodes;
}

function createRootedTree(graph, root, parent) {
  let node = graph[root];
  node.parent = parent;
  let m = node.aNodes.length;
  let parentIndex = undefined;
  for (let i = 0; i < m; i++) {
    if (node.aNodes[i] == parent) parentIndex = i;
    else createRootedTree(graph, node.aNodes[i], root);
  }
  if (parentIndex != undefined) {
    node.aNodes[parentIndex] = node.aNodes[m - 1];
    node.aNodes.pop();
  }

  return graph;
}