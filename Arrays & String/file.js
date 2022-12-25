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
//==========================================================

// Find the minimum and maximum element in an array
//==========================================================

// Write a program to reverse the array
//==========================================================

// Find the Kth largest and Kth smallest number in an array
//==========================================================

// Find the occurrence of an integer in the array
//==========================================================

// Sort the array of 0s, 1s, and 2s
//==========================================================

// Subarray with given Sum
//==========================================================

// Move all the negative elements to one side of the array
//==========================================================

// Find the Union and Intersection of the two sorted arrays
//==========================================================
