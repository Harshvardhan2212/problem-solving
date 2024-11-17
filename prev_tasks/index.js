//anagram words checking
t.split("").sort().join("");
function isAnagram(t,s){
s.split("").sort().join("");
return t===s;
}

console.log(isAnagram(rat,art));