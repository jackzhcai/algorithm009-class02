/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @description 144. 二叉树的前序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    // 一
    var result = []
    traversal([root])
    return result

    function traversal(nodes) {
        var vals = []
        var list = []
        while (nodes.length) {
            var current = nodes.shift()
            if (current && current.val !== undefined) {
                vals.push(current.val)
            }
            if (current && current.children) {
                current.children.forEach(child => {
                    list.push(child)
                })
            }
        }
        if (vals.length) {
            result.push(vals)
        }
        if (list.length) {
            traversal(list)
        }
    }

    // 二 
    // var result = []
    // search(result, root, 0)
    // return result

    // function search(nums, node, k) {
    //     if (node === null) {
    //         return
    //     }
    //     if (result[k] !== undefined) {
    //         nums[k] = []
    //     }
    //     nums[k].push(node.val)

    //     if (node.children) {
    //         for (var i = 0; i < node.children.length; i++) {
    //             search(nums, node.children[i], k + 1)
    //         }
    //     }
    // }

};