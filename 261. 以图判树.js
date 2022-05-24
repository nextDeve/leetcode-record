/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function (n, edges) {
    let p = Array(n);
    for (let i = 0; i < n; i++) {
        p[i] = i;
    }
    for (let edg of edges) {
        if (find(edg[0], p) === find(edg[1], p)) return false;
        else {
            union(edg[0], edg[1], p);
        }
    }
    let c = 0;
    for (let e in p) {
        if (parseInt(e) === p[e]) c++;
        if (c > 1) return false;
    }
    return true;
};

function union(nodeA, nodeB, p) {
    const parentA = find(nodeA, p);
    const parentB = find(nodeB, p);
    p[parentA] = parentB;
}

function find(node, p) {
    if (p[node] !== node) p[node] = find(p[node], p);
    return p[node];
}