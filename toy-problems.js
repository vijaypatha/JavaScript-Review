/* Make sure you do these last */
//One completed - took 30 minutes with new method reduce.
//two done but incomplete
//three DONE
//five DONE exprect presents and parents
// four problems left

/*

Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

plusOneSum([1, 2, 3, 4]); // 14 //DONE//

*/
var Arr = [1,2,3,4];
function addOneSum(){
  //first step add one to the array [1,2,3,4] = [2,3,4,5]
  //input array and outout array with numbers
  //action - add a number for each ==> for loop
  var plusOneArr = [];
  var result = 0;
  for(var i = 0; i < Arr.length; i++) {
    plusOneArr.push(Arr[i] + 1);
    //step two: now add all plusOneArr numbers
    // Input + output = numbers
    //ACTION - GOOGLE found .reduce
  }
result =  plusOneArr.reduce(function(a,b){
 return a + b;
  },0);
  console.log(result);
}
addOneSum();

// numbers.reduce(function(){})
// numbers.reduce(()=>{})



/*

Write a function that accepts a multi dimensional array and returns a flattened version.

flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]

*/
// var flattened = [1, 2, [3, [4], 5, 6], 7].reduce(function(x, y) {
//   return x.concat(y);
// }, []);

function flatten(arry) {
    //recursion - fn tht calls itself
    var newAry = [];
    for (var i = 0; i < arry.length; i++) {
        if (Array.isArray(arry[i])) {
            var flatAry = flatten(arry[i])
            for (var j = 0; j < flatAry.length; j++) {
                newAry.push(flatAry[j])
            }
        } else {
            newAry.push(arry[i]);
        }
    }
    return newAry;
}

console.log(flatten([1, 2, [3, [4], 5, 6], 7]));

/*

Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]

*/
var givenArr = ["a1", "a2", "b1", "b2","bN", "c1", "c2","cN","aN","a0"];
resultArr = givenArr.sort();
console.log(resultArr);

/*

There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array
//and deleting a random element. Given these two arrays, find which element is missing in the second array.

*/





/*

Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).

Example

longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]

*/
//var word = "You are just an old antidisestablishmentarian";
//var word = "I gave a present to my parents"; - TWO WORDS ???????
var word = "Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo";
var wordArr = word.split(" ");
var empWord = "";
function longWord(){
  for(var i = 0; i < wordArr.length; i++) {
    if(wordArr[i].length > empWord.length) {
      empWord = wordArr[i]
    }
  }
console.log(empWord);
}
longWord();

/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/


/*

Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".

*/



/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/
