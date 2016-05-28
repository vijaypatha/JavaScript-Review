//STATUS: Last PROBLEM//

//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

  //Your code here
  var favoriteThings = {
    band: "bearden",
    food:"briyani",
    person:"mommy",
    book:"BOM",
    movie:"006",
    holiday:"christmas"
  }

//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

  //Your code here
  favoriteThings.car = "honda"; //new key call car with value honda
  favoriteThings.brand="hello";

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

  //Your code here
  favoriteThings.food="briyani again"; //chaning the value of existing key.
  favoriteThings.book = "rats";

//Now, alert your favorite person, then alert your favorite book.

  //Your code here
// alert(favoriteThings.person);
// alert(favoriteThings.car);
// alert(favoriteThings.book);
// alert(favoriteThings.food);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var user = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}

//Above you're given a user object. Loop through the user object checking to make sure that each value is truthy. If it's not truthy, remove it from the object. hint: 'delete'.

  //Your code here
  //how to loop thru a object ... its not for loop. its for in loop?
  for(var key in user) {
    if(!user[key]) {
      delete user[key];
    }
  }
//console.log(user);

//Once you get your truthy object,
// Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.
user.name = "vijay";
//user.email="vijay@vijay.com";
user.username="vija111";
  //Your code here

//Now console.log your object and make sure it looks right.

  //Your code here
//  console.log(user);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//create an empty object called methodCollection.
var methodCollection = {};

  //Your code here

//Now add two methods (functions that are properties on objects) to your methodCollection object.
//One called 'alertHello' which alerts 'hello' and another method called logHello which logs 'hello' to the console.

  //Your code here
  methodCollection.alertHello = function(){
    alert("hello");
  };
  methodCollection.logHello = function(){
    console.log("hello helloo");
  };

//Now call your alertHello and logHello methods.

  //Your code here
// methodCollection.alertHello();
// methodCollection.logHello();
// console.log(methodCollection);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called voweler that accepts a string, and returns an object with the keys being all the vowels in that string,
//and the values being how many times that particular vowel was in the string.
//voweler("This is a test") --> {i: 2, a: 1, e: 1};

function voweler(){
  //need a empty object
  var emObj = {};
  var len = [];
  //need the sentece
  var sent = "This is a test";
  //var that has vowels
  var vows = ["a","i","e","o","u"];
  for(var i = 0; i<sent.length;i++) {
    for(var j = 0; j < vows.length; j++) {
      if(sent[i] === vows[j]) {
        //console.log(sent[i]);
        len = len+ sent[i];
        //emObj.y=len[1].length;
      }
    }
  }
    console.log(len);
  emObj.x = len(0).length;
}
voweler();
