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