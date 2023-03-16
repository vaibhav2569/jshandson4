// 1.Testing Objects for Properties
function checkObj(obj, checkProp) {
    // Only change code below this line
    return obj.hasOwnProperty(checkProp)?obj[checkProp]:"Not Found";
    // Only change code above this line
  }
// 2.Manipulating Complex Objects
const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {
      "artist": "Daft Punk",
      "title": "Homework",
      "release_year": 1997,
      "formats": [ 
        "CD", 
        "Cassette", 
        "LP"
      ],
      "gold": true
    }
  ];

//   3.Accessing Nested Objects
const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  const gloveBoxContents = myStorage.car.inside["glove box"];

//   4.Accessing Nested Arrays
const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  const secondTree = myPlants[1].list[1];
//    5.Record Collection
function updateRecords(records, id, prop, value) {
    if (prop !== "tracks" && value !== "") {
     records[id][prop] = value;
   } else if (prop === "tracks" && value !== "" && records[id].hasOwnProperty("tracks") === false) {
     records[id][prop] = [value];
   } else if (prop === "tracks" && value !== "") {
     records[id][prop].push(value);
   } else if (value === "") {
     delete records[id][prop];
   }
   return records;
 }
//   6.Iterate with JavaScript While Loops
const myArray = [];

// Only change code below this line
let i =5 ;

while (i >= 0) {
  myArray.push(i);
  i--;
}
// 7.Iterate with JavaScript For Loops
for (let i = 0; i < 5; i++) {
    myArray.push(i+1);
  }

//   8.Iterate Odd Numbers With a For Loop
for (let i = 1; i < 10; i += 2) {
    myArray.push(i);
  }
//   9.Count Backwards With a For Loop
for (let i = 9; i > 0; i -= 2) {
    myArray.push(i);
  }
//   10.Iterate Through an Array with a For Loop
let total=0;
for (let i = 0; i < myArr.length; i++) {
  total+=myArr[i];
}
//  11.Nesting For Loops
function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product*=(arr[i][j]);
    }
  }
    // Only change code above this line
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

//   12.Iterate with JavaScript Do...While Loops
do{
    myArray.push(i);
    i++;
  }while (i < 5)

//   13.Replace Loops using Recursion
function sum(arr, n) {
    // Only change code below this line
   if(n<=0)
   return 0;
   else  return arr[n-1]+sum(arr,n-1)
   
  }
//   14.Profile Lookup
function lookUpProfile(name, prop) {
    // Only change code below this line
  for (let x = 0; x < contacts.length; x++) {
      if (contacts[x].firstName === name) {
        if (contacts[x].hasOwnProperty(prop)) {
          return contacts[x][prop];
        } else {
          return "No such property";
        }
      }
    }
    return "No such contact";
    // Only change code above this line
  }
  
  lookUpProfile("Akira", "likes");

//   15.Generate Random Fractions with JavaScript
function randomFraction() {

    // Only change code below this line
  
    return Math.random();
  
    // Only change code above this line
  }

//   16.Generate Random Whole Numbers with JavaScript
function randomWholeNum() {

    // Only change code below this line
  
    return Math.floor(Math.random()*10);
  }
// 17.Generate Random Whole Numbers within a Range
function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * ( myMax-myMin  + 1)) + myMin;
    // Only change code above this line
  }
//   18.Use the parseInt Function
function convertToInteger(str) {
    return parseInt(str);
    }
    
    convertToInteger("56");

    // 19.Use the parseInt Function with a Radix
    function convertToInteger(str) {
        return parseInt(str, 2);
       }
       
       convertToInteger("10011");

    //    20.Use the Conditional (Ternary) Operator
    function checkEqual(a, b) {
        return a == b ? "Equal" : "Not Equal";
       }
       
       checkEqual(1, 2);

    //    21.Use Multiple Conditional (Ternary) Operators
    function checkSign(num) {
        return (num==0) ? "zero" 
           : (num>0) ? "positive" 
           : "negative";
       }
       
       checkSign(10);
    //    22.Use Recursion to Create a Countdown
    function countdown(n){
        if (n < 1) {
         return [];
       } else {
         const arr = countdown(n - 1);
         arr.unshift(n);
         return arr;
       }
     }
    //  23.Use Recursion to Create a Range of Numbers
    function rangeOfNumbers(startNum, endNum) {
        if (endNum < startNum) {
         return [];
       } else {
         const numbers = rangeOfNumbers(startNum, endNum - 1);
         numbers.push(endNum);
         return numbers;
       }
     };
    
