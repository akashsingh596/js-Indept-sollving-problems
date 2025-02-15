// write a js function that takes an object and convert it into an array containing two subarrays like one for the keys and values

// input = {a:1,b:2,c:3,d:4}
// output = [[a,b,c,d],[1,2,3,4]]

// approch 
//  js function 
//  now make input object as an array containing two subarrays
// [[one for the keys...],[one for the values]]

// object methods -> Object.keys() && Object.values()

let obj = {a:1,b:2,c:3,d:4}

function returningArray(){
    let key  = Object.keys(obj)
    let value = Object.values(obj)
    let result = [key,value]
    console.log(result)
}
returningArray()