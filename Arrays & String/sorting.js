// ===== BUBBLE_SORT =================
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap the elements
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  // Test the function
  const arr = [3, 1, 2, 5, 4];
  console.log(bubbleSort(arr));  // Output: [1, 2, 3, 4, 5]
  
// ===== SELECTION_SORT =================
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      // Find the minimum element in the unsorted portion of the array
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      // Swap the minimum element with the first element of the unsorted portion
      let temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }
  
  // Test the function
  const arr1 = [3, 1, 2, 5, 4];
  console.log(selectionSort(arr));  // Output: [1, 2, 3, 4, 5]
  

// ===== INSERTION_SORT =================
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;
      // Shift the elements of the sorted portion to the right until the correct position for the key is found
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    }
    return arr;
  }
  
  // Test the function
  const arr2 = [3, 1, 2, 5, 4];
  console.log(insertionSort(arr2));  // Output: [1, 2, 3, 4, 5]
  

// ===== MERGE_SORT =================
function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    // Divide the array into two halves
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
  
    // Recursively sort the two halves
    left = mergeSort(left);
    right = mergeSort(right);
  
    // Merge the sorted halves
    return merge(left, right);
  }
  
  function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return result.concat(left, right);
  }
  
  // Test the function
  const arr6 = [3, 1, 2, 5, 4];
  console.log(mergeSort(arr6));  // Output:
  