// var threeItems = [1, 2, 3];
// //create a function named 'last' that returns the last item from 'threeItems'
// //alert the result of your function
// //code here
// function last() {
//     var result = threeItems[threeItems.length - 1];
//     alert(result);
// }
// last();

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
//Loop through evenArray removing all values that aren't even

// var evenArray = [1,2,3,6,22,98,45,23,22,12];
//
//   //code here
//   for(var i = 0; i < evenArray.length; i++) {
//     if(evenArray[i] % 2 !== 0) { //find the odd (not divisible by two)
//       evenArray.splice(i,1); //splice the odd of the array
//       i--; // go back a step to redo the if condition
//     }
//   }
//   console.log(evenArray);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'.
//Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array.
//If it is, alert true, if it's not, alert false
// var getRandomArbitrary = function() {
//   return Math.floor(Math.random() * (30 - 0) + 0);
// }
// var result = getRandomArbitrary();
// console.log("random number is: "+result);
// var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];
//
//   //code here
//   function check() {
//     for(var i = 0; i < randomArray.length; i++) {
//       if(randomArray[i] === result) {
//         alert (true);
//       } else {
//         alert (false);
//       }
//     }
//   }
//   check();



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
// var first = [1,2,3,4,5];
// var second = [];
//
//   //code here
//   second = first.slice(0,5);
//   second.push(6,7);
//     console.log(second);
//
// alert(first) //[1,2,3,4,5];
// alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.

//longest? need to compare (if statement to compare lenght of two numbers and get the longest)  //datatype is numbers
//how to get to the longest ??
//return longest word //datatype string (easy)
// var sentence = "Dev Mountain is the best"
// var newArr = sentence.split(" "); //this will give a array of words
// //console.log(newArr[1].length)
//
// //code here
// var empStr = ""; // i used array before var empStr = []; to use the push function. push keeps adding in increments
// for (var i = 0; i < newArr.length; i++) {
//     if (empStr.length < newArr[i].length) {
//         empStr = newArr[i]; //simple idea of adding an element to empty string variable
//     }
//
// }
// console.log(empStr);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word
// var myPoem = 'what is a jQuery but a misunderstood object?'
// //What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?
//
//   //code here
//  function capitalize(){
//    var newSent = [];
//     //find the position of the first letter ==> how? split the sentece to arary and then charAt(0) will give me the first letter (zero index);
//     var newArr = myPoem.split(" ");
//     // console.log(newArr[0].charAt(0)); //giving me what i want
//     // console.log(newArr[1].charAt(0));
//     // console.log(newArr[3].charAt(0).toUpperCase());
//
//      for(var i = 0; i < newArr.length; i++) {
//        var newStr = newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1);
//        var newSent = newSent + " " + newStr;
//
//      }
//
//
//     //capitalize the first letter with uppercase
// console.log(newSent);
//   }
//   capitalize();



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



// var theOdyssey = "function expression or function declaration? Tis an obvious choice";
// //Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.
// var vowels = ["a", "e", "i", "o", "u"];
// //return <b>HOW MANY</b> DT ==> numbers
// //give: a string
// //compare varString with varVowles. and get the letters taht match my volwels
// //to compare each lettter of two varibales I  need two for loop
// function vowelCounter() {
//   var empStr = [];
//     for (var i = 0; i < theOdyssey.length; i++) {
//         for (var j = 0; j < vowels.length; j++) {
//             if (theOdyssey[i] === vowels[j]) {
//               empStr.push(theOdyssey[i]);
//               debugger
//
//             }
//         }
//     }
//     console.log(empStr.length);
// }
// vowelCounter();
