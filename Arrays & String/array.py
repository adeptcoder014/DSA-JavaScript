
# Problem: You are given an array of integers, and you need to find the maximum sum of a subarray
# within the array.
def max_subarray_sum(arr):
    max_sum = float('-inf')  # Initialize max_sum to negative infinity
    current_sum = 0  # Initialize current_sum to 0
    max_start = 0  # Initialize max_start index
    max_end = 0  # Initialize max_end index

    for i, num in enumerate(arr):
        current_sum += num
        if current_sum < 0:
            current_sum = 0  # Reset current_sum if it becomes negative
            max_start = i + 1  # Move max_start index to the next element
        
        if current_sum > max_sum:
            max_sum = current_sum
            max_end = i  # Update max_end index

    return max_sum, arr[max_start:max_end + 1]  # Return max_sum and the subarray


# Example usage:
# array = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
array = [ 2, 1, 4]
# print("==========", enumerate(array))
max_sum, max_subarray = max_subarray_sum(array)
print("Maximum sum of a subarray:", max_sum)
print("Maximum sum subarray:", max_subarray)
