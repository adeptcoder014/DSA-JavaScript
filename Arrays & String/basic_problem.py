def factorial_recursive(number) :
    
    
    if number == 0  or number == 1 :
        return 1 
    else:
        return number*factorial_recursive(number-1)
    
def factorial(number) :
    factorial_sum = 1
    for i in range(1 ,number+1 ):
        print(i)
        factorial_sum = factorial_sum * i
    return factorial_sum

# --------- Time complexity = O(n) ---------------
def palindrome(string) :
    palindrome_string=''
    
    for i in range(len(string)-1, -1, -1):
        palindrome_string = palindrome_string + string[i] 

    if string == palindrome_string :
        return True
    else:
        return False




def is_prime_division_methods(n):
    if n <= 1:
        return False
    
    for i in range(2, (n//2) + 1):
        if n % i == 0:
            return False
            
        
 
    return True


# ========= Using Flags Technique ================


def primes_hai(btween):
    
    primes = []
    for num in range(2,btween+1):
        is_prime=True
        for i in range(2, int(num**.5)+1): # ---> This FOR loops checks the prime, and if prime appends it (can be made as a F(x))
            if num % i ==0:
              is_prime =False
        
        if is_prime :
            primes.append(num)
              
    return primes





# ========= Breaking down solutions/probelms t0 f(x) ================
 
def is_prime_sqrt_method(n):
    
    
    if n <= 1:
        return False
    
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

def get_all_prime(n):
    primes = []
    for i in range (2, n+1):
        if is_prime_sqrt_method(i):
            primes.append(i)
    return primes

# ==========================================================


    