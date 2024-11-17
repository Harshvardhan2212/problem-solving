// next_permutation method implementation
function nextPermutation(L) {
    let n = L.length;
    let i = n - 2;
    while (i >= 0 && L[i] >= L[i + 1]) {
        i--;
    }
    
    if (i === -1) {
        return false;
    }
    
    let j = i + 1;
    while (j < n && L[j] > L[i]) {
        j++;
    }
    j--;
    
    [L[i], L[j]] = [L[j], L[i]];
    
    let left = i + 1;
    let right = n - 1;
    
    while (left < right) {
        [L[left], L[right]] = [L[right], L[left]];
        left++;
        right--;
    }
    
    return true;
    }
    
    // Function to print nth permutation
    // using next_permute()
    function nPermute(string, n) {
    let newString = [];
    
    // Sort the string in lexicographically
    // ascending order
    string = string.split("").sort().join("");
    let j = 2;
    
    // Keep iterating until
    // we reach nth position
    while (nextPermutation(string.split(""))) {
        newString = string.split("");
    
        // check for nth iteration
        if (j === n) {
        break;
        }
        j++;
    }
    
    // print string after nth iteration
    console.log(newString.join(""));
    }
    
    // Driver Code
    let string = "GEEKSFORGEEKS";
    let n = 100;
    nPermute(string, n);
    