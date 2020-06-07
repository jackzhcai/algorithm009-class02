/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    var inMap = new Map()
    for (var i = 0, len = inorder.length; i < len; i++) {
        inMap.set(inorder[i], i)
    }
    let root = helper(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1, inMap)
    return root

    function helper(preOrder, preStart, preEnd, inOrder, inStart, inEnd, inMap) {
        if (preStart > preEnd || inStart > inEnd) {
            return null
        }
        let node = new TreeNode(preOrder[preStart])
        let inNode = inMap.get(node.val)
        let numsLeft = inNode - inStart

        node.left = helper(preOrder, preStart + 1, preStart + numsLeft, inOrder, inStart, inNode - 1, inMap)
        node.right = helper(preOrder, preStart + numsLeft + 1, preEnd, inOrder, inNode + 1, inEnd, inMap)

        return node
    }
};