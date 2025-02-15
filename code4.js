// write a fucntion which swap keys and values of the object

// example
// input : {a:1,b:2,c:3}
// output : {"1":"a","2":"b","3":"c"}

//approch
// 1. create a function which take object as a parameter
// 2. create a empty object -> "swap"
// 3. loop through the object -> "for of loop"
// 4. swap the key and value -> Object.entries()
// [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
// 5. return the new object

let input = { a: 1, b: 2, c: 3 };

function swapKeyAndValue() {
  let swap = {};
  // let array = Object.entries(input)
  for (const [key, value] of Object.entries(input)) {
    swap[value] = key
    
  }
  console.log(swap)
}
swapKeyAndValue();
