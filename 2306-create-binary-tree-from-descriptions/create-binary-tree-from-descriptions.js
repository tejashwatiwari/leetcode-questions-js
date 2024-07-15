/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(d) {
    let root = new Set();
    const nodes = {};
    for (let i = 0; i < d.length; i++) {
        root.add(d[i][0]);
    }
    for (let i = 0; i < d.length; i++) {
        if(!(d[i][0] in nodes)) nodes[d[i][0]] = new TreeNode(d[i][0]);
        if(!(d[i][1] in nodes)) nodes[d[i][1]] = new TreeNode(d[i][1]);
        if (d[i][2]) {
            nodes[d[i][0]].left = nodes[d[i][1]];
        } else {
            nodes[d[i][0]].right = nodes[d[i][1]];
        }
        if (root.has(d[i][1])) root.delete(d[i][1]);
    }

    return nodes[root.values().next().value];
};