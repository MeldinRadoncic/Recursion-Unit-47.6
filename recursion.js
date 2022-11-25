/** product: calculate the product of an array of numbers. */

function product(nums, n = 0) {
  if(n === nums.length) return 1;

  return (nums[n] * product(nums, n + 1))

}
 



/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, word = 0) {
  if(idx === words.length) return word;

  if(word<words[idx].length){
    word = words[idx].length
  }
  return longest(words, idx+1, word)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, otherStr = '') {
  if (idx >= str.length) return otherStr;
  otherStr += str[idx];
  return everyOther(str, idx + 2, otherStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
let leftIdx = idx;
let rightIdx = str.length - idx - 1; 
if (leftIdx >= rightIdx) return true;
  if (str[leftIdx] !== str[rightIdx]) return false;
  return isPalindrome(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
if(idx === arr.length) return -1;
if(arr[idx] === val) return idx;
return findIndex(arr, val, idx + 1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
return str.split('').reverse().join('')
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
let start = 0;
let end = arr.length -1

while(start <= end) {
  let middleIdx = Math.floor((start + end) / 2)
  if(arr[middleIdx] === val) {
    return middleIdx
  }else if(arr[middleIdx] < val) {
    start = middleIdx + 1
  }else {
    end = middleIdx - 1
  }
}
  return -1
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
