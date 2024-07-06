// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

const groupAnagram = (strs)=>{
    const result = {}
    for(word of strs){
       const sorted = word.split("").sort().join("")   
        if(result[sorted]) {
          result[sorted].push(word)  
        }else{
           result[sorted] = [word]     
        }
    }
    return Object.values(result)
}

