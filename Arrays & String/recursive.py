def print_subset(arr, i, n, osf):
    if i == n:
        print("[" + osf + "]")
        return
    # Include current element
    print_subset(arr, i + 1, n, osf + str(arr[i]) + " ")

    # Exclude current element
    print('ex ------',osf)
    print_subset(arr, i + 1, n, osf)

if __name__ == "__main__":
    n = int(input("Enter n: "))
    arr = list(map(int, input("Enter array elements: ").split()))
    print("Subsets:")
    print_subset(arr, 0, n, "")


def print_subsets(arr):
    n = len(arr)
    for i in range(1 << n):  # Generate all possible subsets using bitmasking
        subset = []
        for j in range(n):
            if (i & (1 << j)) > 0:
                subset.append(arr[j])
        # print(subset)

if __name__ == "__main__":
    arr = [1, 2, 3]
    print("Subsets:")
    print_subsets(arr)
for i in range(1 << 3):  # Generate all possible subsets using bitmasking
        print(i)