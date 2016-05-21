var threeItems = [1, 2, 3];
// //create a function named 'last' that returns the last item from 'threeItems'
// //alert the result of your function
//
//   //code here
var last = function() {
    return threeItems[threeItems.length - 1];
}
last();
//
//
//
// /* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
//
//
//
// //Loop through evenArray removing all values that aren't even
var evenArray = [1, 2, 3, 6, 22, 98, 45, 23, 22, 12];

//code here
for (var i = 0; i < evenArray.length; i++) {
    if (evenArray[i] % 2 !== 0) {
        evenArray.splice(i, 1);
        i--;
    }
}
console.log(evenArray);
// /* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
//
//
//
// //below you're given a function that will return a random number between 0 and 30 and an array full or
// //numbers 'randomArray'. Your job is to write a function that will get a random number,
// //then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
//
var getRandomArbitrary = function() {
    return Math.floor(Math.random() * (30 - 0) + 0);
}
var numGen = getRandomArbitrary();
console.log("random number is: " + numGen);
var randomArray = [0, 3, 4, 5, 6, 7, 9, 14, 17, 24, 25, 26, 29, 30];

//code here
var randomNum = function() {
    for (var i = 0; i < randomArray.length; i++) {
        if (numGen === randomArray[i]) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
randomNum();
//
//
// /* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
//
//
//
// //Create a copy of first and save it into second. Then, add 6 and 7 to the end of second.
// //When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1, 2, 3, 4, 5];
var second;

//code here
second = first.slice(0, 5);
second.push(6, 7);


alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

//code here
var senArr = [];
senArr = sentence.split(" ");

function longest() {
    var longWord = "";
    for (var i = 0; i < senArr.length; i++) {
        if (senArr[i].length > longWord.length) {
            longWord = senArr[i];
        }
    }
    return (longWord);
}
longest();
/*
Logic Steps - one full sentence need to be broken into elements of array of index.  ==> hence used the split(" ")
array.length will give me length of the full array
array[0].length will give me the length of  element at that index
but what am i comparing that with?
that when you come with a empty var that holds a string
if should compare the array[0].lenght store that string

  */


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word
var myPoem = 'What is a jQuery but a misunderstood object?';
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?
var newPoem = myPoem.split(" ");
//code here
function newSen(cap) {
    var empArr = [];
    for (var i = 0; i < cap.length; i++) {
        var str = cap[i].charAt(0).toUpperCase() + cap[i].slice(1);
        empArr = empArr + " " + str;
    }

    return empArr;
}
newSen(newPoem);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.
/*
output = number (how many vowel) aka count of vowels
input = string
what is needed = vowelArray to compare with the Odyssey
action = loop thru each letter in theOdyssey..
// if the letters in theOdyssey  is equal to Vowel Array
*/
var vowelArray = ["a", "e", "i", "o", "u"];

function vowelCounter(numOfVowels) {
    var empArr = [];
    for (var i = 0; i < numOfVowels.length; i++) {
        for (var j = 0; j < vowelArray.length; j++) {
            if (numOfVowels[i] === vowelArray[j]) {
                empArr = empArr + numOfVowels[i];
            }
        }
    }
    console.log(empArr.length);
}
vowelCounter(theOdyssey);
