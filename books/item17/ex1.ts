/* eslint-disable @typescript-eslint/no-unused-vars */

function printTriangles(n: number) {
  const nums: number[] = [];
  for (let i = 0; i < n; i++) {
    nums.push(i);
    console.log(arraySum(nums))
  }
}

function arraySum(arr: readonly number[]) {
  let sum = 0;
  let num;

  for (const num of arr) {
    sum += num;
  }
  return sum;
}

printTriangles(5);

export {};
 