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

    作者： feikerwu
    链接： https: //leetcode-cn.com/problems/friend-circles/solution/bfs-dfs-bing-cha-ji-by-feikerwu/
        来源： 力扣（ LeetCode）
    著作权归作者所有。 商业转载请联系作者获得授权， 非商业转载请注明出处。
};