//write a js function to find the common kkeys and value in the object

// approch

// -> loop -> for in loop ->  for (let key in obj) -> keys = a,b,c,d

// we will be using hasOwnProperty

// 1 check
// hasOwnProperty(key) >> true || false
// obj1.hasOwnProperty(key)
// obj2.hasOwnProperty(key)

// 2 check
//  compare the  obj1 and obj2
// using if condition and && operator

let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { b: 2, c: 3, d: 4 };

function findCommonKeyValue(obj1, obj2) {
  let commonValues = {};

  for (const key in obj1) {
    if (
      obj1.hasOwnProperty(key) &&
      obj2.hasOwnProperty(key) &&
      obj1[key] === obj2[key]
    ) {
      commonValues[key] = obj1[key];
    }
  }
  console.log(commonValues);
}
findCommonKeyValue(obj1, obj2);
