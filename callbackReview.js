//COMPLETED//

/* Declare and Define the functions here that will make the function calls below work properly */
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
function first(nameList, cb) {
    cb(nameList[0]);
}
// debugger
first(names, function(firstName) {
    console.log('The first name in names is ', firstName)
});



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function last(nameList, cb) {
    cb(nameList[nameList.length - 1]);
}
last(names, function(lastName) {
    console.log('The last name in names is ', lastName);
});



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//have the contains function return a boolean value for if the name is in the array or not.
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function contains(randName, nameList, cb) {
    for (var i = 0; i < nameList.length - 1; i++) {
        if (nameList[i] === randName) {
            var result = true;
        }
    }
    cb(true);
}
contains('Colt', names, function(yes) {
    if (yes) {
        console.log('Colt is in the array');
    } else {
        console.log('Colt is not in the list');
    }
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM  COOOOOL COOOOOL*/
var numbers = [1,2,3,4,5];
function map(numList,cb){
  var empArr = [];
  for(var i = 0; i < numList.length; i++) {
    var calced = cb(numList[i]);
     empArr.push(calced);
  }
  return empArr;
  //debugger
}
//Produces a new array of values by mapping each value in list through a transformation function

map(numbers, function(num){
  return num * 2; //returns an array of [2,4,6,8,10]

});

// console.log(map([6,5,9,4,6,3,8,9,4], function(i){
//   return i+57-i*i + i*i*i;
// }))




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function uniq(nameList, cb) {
    for (var i = 0; i < nameList.length; i++) {
        for (var j = i + 1; j < nameList.length; j++) {
            if (nameList[i] === nameList[j]) {
                nameList.splice(i, 1);
                j--;
            }
        }
    }
    cb(nameList);
}

uniq(names, function(uniqArr) {
    console.log('The new names array with all the duplicate items removed is ', uniqArr);
});



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
function each(nameList,cb) {
for (var i = 0; i<nameList.length; i++) {
  cb(i,nameList[i]);
}
each(names, function(item, indice){
  console.log('The item in the ' + indice + 'position is ' + item)
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var users = [{
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
}, {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
}, {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
}, ];

function getUserById(randid, userObj, cb) {
    for (var i = 0; i < userObj.length; i++) {
        if (userObj.id === randid) {
            var result =
                return userObj[i]);
    }
}
user(result);
}


getUserById('16t', users, function(user) {
    console.log('The user with the id 16t has the email of ' + user.email + 'the name of ' + user.name + ' and the address of ' + user.address);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




//Looks through each value in the list, returning the first one that passes a truth test
var numbers  = [1, 2, 3, 4, 5, 6];
find(numbers, function(num){
  return num % 2 == 0; //should return 2
})
