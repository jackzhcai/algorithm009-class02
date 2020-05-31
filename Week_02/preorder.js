/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @description 589. N叉树的前序遍历
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    var result = []
    traversal(root)
    return result
    function traversal(node) {
        if (node) {
            result.push(node.val)
            if (node.children && node.children.length) {
                for (var i = 0, len = node.children.length; i < len; i++) {
                    traversal(node.children[i])
                }
            }
        }
    }
};