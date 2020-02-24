
let o=1
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
  let newArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      newArr.push(left[leftIndex]);
      leftIndex++;
    } else {
      newArr.push(right[rightIndex]);
      rightIndex++;
    }
  }
 
  return newArr
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

mergeSort([8,4,23,42,16,15])
module.exports = {mergeSort, merge}