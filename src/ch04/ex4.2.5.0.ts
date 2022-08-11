/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type TreeNode = {
  value: string;
};
type LeafNode = TreeNode & {
  isLeaf: true;
};
type InnerNode = TreeNode & {
  chidren: [TreeNode] | [TreeNode, TreeNode];
};

let a: TreeNode = { value: "a" };
let b: LeafNode = { value: "b", isLeaf: true };
let c: InnerNode = { value: "c", chidren: [a, b] };

function mapNode<T extends TreeNode>(node: T, f: (value: string) => string): T {
  // node.
  return {
    ...node,
    value: f(node.value),
  };
}

let a1 = mapNode(a, _ => _.toUpperCase());
let b1 = mapNode(b, _ => _.toUpperCase());
let c1 = mapNode(c, _ => _.toUpperCase());

export {};
