/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function (M) {
    let count = M.length;
    let parnets = Array.from(M).map((item, index) => index);

    function find(x) {
        if (parnets[x] === x) {
            return x;
        }
        return (parnets[x] = find(parnets[x]));
    }

    function union(x, y) {
        if (find(x) === find(y)) {
            return;
        }
        parnets[parnets[x]] = parnets[y];
        count--;
    }

    for (let i = 0; i < M.length; i++) {
        for (let j = i + 1; j < M[i].length; j++) {
            if (M[i][j]) {
                union(i, j);
            }
        }
    }

    return count;
};