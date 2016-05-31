// //NEED TO START
//
// var callFriend = function(){
//   var friend = 'Jake';
//   function callF(number){
//     return 'Calling ' + friend + ' at ' + number;
//   }
//   return callF;
// };
//
// //Above you're given a callFriend function that returns another function.
// //Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.
//
//   //code here
//
//
//
// /*
//
// Write a function that accepts a function as it's first argument
// and returns a new function
// //(which calls the original function that was passed in)
// that can only ever be executed once.
// Once completed, add a second arguments that allows the function to be executed N number of times.
// After the function has been called N number of times, console.log('STAHHP');
// */
// var runN = function(fn) { //20
//     var count = 0; //for line 23
//     return function() { //21
//         if (count === 0) { //for line 23
//             fn(); //22
//             count++; //for line 23
//         }
//     }
// };
//
// var result = runN(function(){
//   console.log('run');
// })
//
// //step 2 finalizing for 24 and 25
//
// var runN = function(fn,timesToRun) { //20
//     var count = timesToRun; //for line 23 // count is the
//     return function() { //21
//         if (count === 0) { //for line 23
//             fn(); //22
//             count--; //for line 23
//         } else {
//           console.log('STAHHP');
//         }
//     }
// };
//
// var result = runN(function(){
//   console.log('run');
// }, 5);
// result();

function say667() {
    // Local variable that ends up within closure
    var num = 666;
    var say = function() {
        console.log(num);
    }
    num++;
    return say; //this say is ===>>>> function say(), i'm returning a inner function to outer function
}
var sayNumber = say667(); //  say667() is function say() {console.log(num);}

sayNumber(); // execution of say().. which will console.log num. Where num ===> 666 + 1;

/*
1. sayNumber

2. sayNumber = say667()

3. say667() =

var num = 666;
var say = function() {
    console.log(num);
}
num++;
return say;

}

4. var say = function()
5.console.log(num) // noaction
6. num ++ ==> 666+1 ==> num = 667
8. go back to step 5. Console.log 667
*/
function say667() {
    // Local variable that ends up within closure
    var num = 666;
                                                              var say = function() {
                                                                  console.log(num);
                                                              }
    num++;
    return say;  // this is function  with BlockCode console.log(num);
}
var sayNumber = say667(); // this is function say667 call that will return "say" which is a funciton.

sayNumber(); // with this im actually executing function say.. which console logs num ..> 666 + num++
//PROBLEM 2
function foo(x) {
    var tmp = 3;

    function bar(y) {
        console.log(x + y + (++tmp)); // will log 16
    }

    bar(10); //calling innerfunction in outerfunction.
}

foo(2);

function outerFunction() {
    var name = "vijay";
    var innerFunction = function() {
        console.log("My name is " + name);
    }
    return innerFunction; //function function definition
}
var printName = outerFunction();
printName(); // i have to call the innerfunction. Since i only returned the definiation of innerFunction in the return statement


function addNumber(){
  var firstNumber = 15;
  function result(secondNumber){
    console.log("The Total is: " + firstNumber * secondNumber);
  }
  return result(2); //im asking to reuturn the result of the invocation of the function
}
addNumber();// hence i do not have to call the innerfunction again

function outerFunction() {
    var name = "vijay";
  function innerFunction() {
        console.log("My name is " + name);
    }
    return innerFunction();
}
 outerFunction();

function outerFunction() {
    var name = "vijay";

    return function innerFunction() {
        console.log("My name is " + name);
    }
}
var callInnerFuntion = outerFunction();
callInnerFuntion();
