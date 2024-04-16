# // Reverse a String: Write a function to reverse a string.

def rev_string_og(str):
    
    reverse_string=''
    
    for i in range(len(str)):
        lastIndexedLetter = str[len(str)-i -1]
        reverse_string  = reverse_string + lastIndexedLetter
            
    return reverse_string


# Given a string, find the length of the longest substring without repeating characters.



def length_of_longest_substring(s):
    # Initialize an empty dictionary to store the index of the last occurrence of each character.
    char_index_map = {}
    
    # Initialize variables to keep track of the maximum length of the substring without repeating characters
    # and the start index of the current substring.
    max_length = 0
    start = 0

    str='abcc'
    obj ={
        'a':0,
        'b':1,
        'c':1,
    }
    
    # Iterate through the characters in the input string 's'.
    for i in range(len(s)):
        # Check if the current character 's[i]' is already in 'char_index_map'.
        # This checks if the character has been seen before in the current substring.
        if s[i] in char_index_map:
            # If the character is in 'char_index_map' and its last occurrence index is after or equal to 'start',
            # update 'start' to skip past the repeating character.
            if char_index_map[s[i]] >= start:
                start = char_index_map[s[i]] + 1
        
        # Update the last occurrence index of the current character in 'char_index_map'.
        char_index_map[s[i]] = i
        print(char_index_map)
        
        # Update 'max_length' with the maximum length of the substring without repeating characters so far.
        # The length is calculated as the difference between the current index 'i' and 'start' plus 1.
        max_length = max(max_length, i - start + 1)
    # print(char_index_map)
    # Return the maximum length of the substring without repeating characters.
    return max_length

def count_occurrences(s):
    char_count_map = {}  # Dictionary to store the count of occurrences of each character

    for char in s:
        if char in char_count_map:
            char_count_map[char] += 1  # Increment the count if the character is already in the map
        else:
            char_count_map[char] = 1  # Initialize the count to 1 for a new character

    return char_count_map

# Example usage:


print(length_of_longest_substring('ABBCD1234'))


