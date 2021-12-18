// extend
// Write a function called "extend".
// Given two objects, "extend" adds properties from the 2nd object to the 1st object.
// Notes:
    // Add any keys that are not in the 1st object.
    // If the 1st object already has a given key, ignore it (do not overwrite the property value).
    // Do not modify the 2nd object at all.
function extend(obj1, obj2) {
    // your code here
    //iterate over properties in object2
    for (var key2 in obj2){ //gives keys in obj2 in string
        //if current obj2 property is not in obj1
        if (obj1[key2] === undefined){
            //add obj2 property to obj1
            obj1[key2] = obj2[key2];
        }
    }
}
//test cases:
var obj1 = {
  a: 1,
  b: 2
};
var obj2 = {
  b: 4,
  c: 3
};

extend(obj1, obj2);

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}