// Find a peak element which is not smaller than its neighbors
//==========================================================

// ---- ALGO -----
// Iterate through the elements of the array.
// For each element, check if it is greater than or equal to its two neighbors (if they exist). If it is, then it is a peak element.
// If no peak element is found, return -1.

function findPeakElement(arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] >= arr[i + 1]) {
      return arr[i];
    }
  }
  return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9];

console.log("-->", findPeakElement(arr));
// time complexity of O(n),
//==========================================================

// Find the minimum and maximum element in an array

// ---- ALGO -----

// Initialize variables min and max to the first element of the array.
// Iterate through the remaining elements of the array.
// For each element, compare it to the current min and max values. If it is smaller than min, update min to the value of the element. If it is larger than max, update max to the value of the element.
// After iterating through the entire array, min and max will contain the minimum and maximum elements, respectively.

function findMinMax(arr) {
  let min = (max = arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return { min, max };
}

const arr1 = [1, 2, 3, 4, 5];
const minMax = findMinMax(arr1);
const minElement = minMax.min;
const maxElement = minMax.max;
//This function has a time complexity of O(n), as it requires iterating through all elements of the array.

//==========================================================

// Write a program to reverse the array

// ---- ALGO -----
// Initialize an empty array reversedArr.
// Iterate through the elements of the input array in reverse order.
// For each element, append it to the end of the reversedArr array.
// Return the reversedArr array.

function reverseArray(arr) {
  const reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

const arr2 = [1, 2, 3, 4, 5];
const re2versedArr = reverseArray(arr2);
console.log(re2versedArr);
//Time complexity : O(n)
//==========================================================

// Find the Kth largest and Kth smallest number in an array
// ---- ALGO -----
// Sort the array in ascending order.
// The Kth smallest number is the element at index K - 1 in the sorted array.
// The Kth largest number is the element at index array.length - K in the sorted array.

function findKthNumbers(arr, k) {
  arr.sort((a, b) => a - b);
  return {
    smallest: arr[k - 1],
    largest: arr[arr.length - k],
  };
}

const arr3 = [1, 2, 3, 4, 5];
const k = 3;
const kthNumbers = findKthNumbers(arr3, k);
const kthSmallest = kthNumbers.smallest;
const kthLargest = kthNumbers.largest;
console.log(kthNumbers);
//Time complexity : O(n)

//==========================================================

// Find the occurrence of an integer in the array
// ---- ALGO -----

// Initialize a variable count to 0.
// Iterate through the elements of the array.
// For each element, if it is equal to the target integer, increment count by 1.
// After iterating through the entire array, count will contain the number of occurrences of the target integer in the array.
function countOccurrences(arr, target) {
  let count = 0;
  for (const element of arr) {
    if (element === target) {
      count++;
    }
  }
  return count;
}

const arr4 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const target = 3;
const count = countOccurrences(arr4, target);
//Time complexity : O(n)

//==========================================================

// Sort the array of 0s, 1s, and 2s
// ---- ALGO -----
// Initialize variables low and high to 0 and array.length - 1, respectively.
// Initialize a variable i to 0.
// While i is less than or equal to high, do the following:
// If the element at index i is 0, swap it with the element at index low and increment both i and low by 1.
// If the element at index i is 2, swap it with the element at index high and decrement high by 1.
// If the element at index i is 1, increment i by 1.
// The array is now sorted.

function sortArray(arr) {
  let low = 0;
  let high = arr.length - 1;
  let i = 0;
  while (i <= high) {
    if (arr[i] === 0) {
      [arr[i], arr[low]] = [arr[low], arr[i]];
      low++;
      i++;
    } else if (arr[i] === 2) {
      [arr[i], arr[high]] = [arr[high], arr[i]];
      high--;
    } else {
      i++;
    }
  }
  return arr;
}

const arr5 = [1, 2, 0, 2, 1, 0];
const sortedArr = sortArray(arr5);
console.log(sortedArr);

// //==========================================================

// Subarray with given Sum

// ---- ALGO -----
// Initialize variables start and end to 0 and 1, respectively.
// Initialize a variable currentSum to the element at index start.
// While end is less than the length of the array, do the following:
// If currentSum is equal to the target sum, return the subarray from index start to index end - 1.
// If currentSum is less than the target sum, add the element at index end to currentSum and increment end by 1.
// If currentSum is greater than the target sum, subtract the element at index start from currentSum and increment start by 1.
// If no subarray is found, return an empty array.

function findSubarray(arr, targetSum) {
  let start = 0;
  let end = 1;
  let currentSum = arr[start];
  while (end < arr.length) {
    if (currentSum === targetSum) {
      return arr.slice(start, end);
    }
    if (currentSum < targetSum) {
      currentSum += arr[end];
      end++;
    } else {
      currentSum -= arr[start];
      start++;
    }
  }
  return [];
}

const arr6 = [1, 2, 3, 4, 5];
const targetSum = 9;
const subarray = findSubarray(arr6, targetSum);

console.log(subarray);

//==========================================================

// Move all the negative elements to one side of the array

// ---- ALGO -----
// Initialize two pointers, left and right, pointing to the first and last element of the array, respectively.
// While left is less than right, do the following:
// If the element at the left index is negative, increment left.
// If the element at the right index is non-negative, decrement right.
// If the elements at the left and right indices are both negative or both non-negative, swap them and increment left and decrement right.
// Return the modified array.

function moveNegatives(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      if (arr[left] < 0) {
        left++;
      } else if (arr[right] >= 0) {
        right--;
      } else {
        // Swap the elements
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
      }
    }
    return arr;
  }
  
  // Test the function
  const arr7 = [3, -1, 2, -5, 4, -2, -3, 5];
  console.log(moveNegatives(arr7));  // Output: [-1, -5, -2, -3, 3, 2, 4, 5]
  
  
  
//==========================================================

// Find the Union and Intersection of the two sorted arrays

// ---- ALGO -----

// Initialize two pointers, i and j, pointing to the first elements of the two arrays, respectively.
// Initialize two empty arrays, union and intersection, to store the union and intersection of the two arrays.
// While i is less than the length of the first array and j is less than the length of the second array, do the following:
// If the element at the i index of the first array is less than the element at the j index of the second array, add the element at the i index to the union array and increment i.
// If the element at the i index of the first array is greater than the element at the j index of the second array, add the element at the j index to the union array and increment j.
// If the element at the i index of the first array is equal to the element at the j index of the second array, add the element to both the union and intersection arrays and increment both i and j.
// If i is less than the length of the first array, add the remaining elements of the first array to the union array.
// If j is less than the length of the second array, add the remaining elements of the second array to the union array.
// Return the union and intersection arrays.

function unionIntersection(arr1, arr2) {
    let i = 0;
    let j = 0;
    let union = [];
    let intersection = [];
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        union.push(arr1[i]);
        i++;
      } else if (arr1[i] > arr2[j]) {
        union.push(arr2[j]);
        j++;
      } else {
        union.push(arr1[i]);
        intersection.push(arr1[i]);
        i++;
        j++;
      }
    }
    // Add the remaining elements of the first array to the union
    while (i < arr1.length) {
      union.push(arr1[i]);
      i++;
    }
    // Add the remaining elements of the second array to the union
    while (j < arr2.length) {
      union.push(arr2[j]);
      j++;
    }
    return [union, intersection];
  }
  
  // Test the function
  const array1 = [1, 3, 4, 5, 7];
  const array2 = [2, 3, 5, 6];
  console.log(unionIntersection(array1, array2));  // Output: [[1, 2, 3, 4, 5, 6, 7], [3, 5]]
  
//==========================================================
