// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, 
// but the order of the characters can be different.

// timeComplexity = o(n^2)
const isAnagram = (s,t) => {
    if(s.length != t.length) return false
    for(i=0; i< s.length; i++){
        if(!t.includes(s[i])) return false
        t = t.slice(0, t.indexOf(s[i])) + t.slice(t.indexOf(s[i])+1)
    }
    return true
}




// take count of each key and compare
// timeComplexity- o(n)
const isAnagramA = (s,t) => {
    if(s.length != t.length) return false
    const countS = {}
    const countT = {}

    for(let i =0; i < s.length; i++){
        countS[s[i]] = 1 + countS[s[i]] || 0
        countT[t[i]] = 1 + countT[t[i]] || 0
    }

    for(const key in countS) {
        if(countS[key] != countT[key]) return false 
    }
    return true
}

// sort and check
// timeComplexity = o(nlogn) due to sorting
const isAnagramS = (s,t) =>{
    sortedS = s.split('').sort().join("")
    sortedT = t.split('').sort().join("")
    return sortedS === sortedT
}