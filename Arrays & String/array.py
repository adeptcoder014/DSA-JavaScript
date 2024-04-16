
# Problem: You are given an array of integers, and you need to find the maximum sum of a subarray
# within the array.

def max_subarray_sum(arr):
    max_sum = float('-inf')  # Initialize max_sum to negative infinity
    current_sum = 0  # Initialize current_sum to 0
    start = 0  # Start index of the current subarray
    end = 0  # End index of the current subarray
    max_start = 0  # Start index of the subarray with maximum sum
    max_end = 0  # End index of the subarray with maximum sum

    for i, num in enumerate(arr):
        current_sum += num
        # ======= Check 1 ================================
        if current_sum < 0:
            print(' first tuner --------')
            current_sum = 0
            start = i + 1  # Move start index to the next element
        
        # ======= Check 2 ================================
        if current_sum > max_sum:
            print(' -------- second tuner --------')
            max_sum = current_sum
            max_start = start
            max_end = i
        # =======================================

    return max_sum, arr[max_start:max_end + 1]

# Example usage:
array = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
# print("==========", enumerate(array))
max_sum, max_subarray = max_subarray_sum(array)
print("Maximum sum of a subarray:", max_sum)
print("Maximum sum subarray:", max_subarray)
