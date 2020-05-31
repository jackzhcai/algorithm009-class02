/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @description 94. 二叉树的中序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const result = []
    traversal(root)
    return result
    function traversal (node) {
        if (node !== null) {
            if (node.left !== null) {
                traversal(node.left)
            }
            result.push(node.val)
            if (node.right !== null) {
                traversal(node.right)
            }
        }
    }
};