/*
Input: n = 10
Output: [2, 3, 5, 7]
Explanation: The prime numbers up to 10 obtained by Sieve of Eratosthenes are [2, 3, 5, 7].

Input: n = 35
Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]

*/

function sieve(n) {
    
    // Create a boolean array to mark primes
    let prime = new Array(n + 1).fill(true);
    
    // 0 and 1 are not prime
    prime[0] = prime[1] = false; 

    // Apply Sieve of Eratosthenes
    for (let p = 2; p * p <= n; p++) {
        if (prime[p]) {
          
            // Mark all multiples of p as not prime
            for (let i = p * p; i <= n; i += p) {
                prime[i] = false;
            }
        }
    }

    // Collect all primes into result array
    let res = [];
    for (let p = 2; p <= n; p++) {
        if (prime[p]) {
            res.push(p);
        }
    }

    return res;
}


console.log(sieve(10));



function sieve2(n) {
    let res = []
    let prime = new Array(n+1).fill(true)
       
    prime[0] = prime[1] = false
        
    for(let i = 2; i <= n; i++) {
        if(prime[i]) {
                
            res.push(i)
                
            for(let j = 2*i; j <= n; j += i) {
                prime[j] = false
            }
        }
    }
    return res
}

console.log(sieve2(15));