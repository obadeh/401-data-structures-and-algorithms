
let mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
};

function merge(left, right) {

  let arr2 = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      arr2.push(left[leftIndex]);
      leftIndex++;
    } else {
      arr2.push(right[rightIndex]);
      rightIndex++;
    }
  }
  let sorted = arr2.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  return sorted;
}

mergeSort([8,4,23,42,16,15]);
module.exports = {mergeSort, merge};