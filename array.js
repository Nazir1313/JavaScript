//===================================================array, length, push=================================================

let fruits = ['orange', 'banana', 'cucomber',];

console.log(fruits[2]);                     // grap value array with index [1]

console.log("length array",fruits.length);                 // grab index number with length 5

fruits.push("potato")                       // after push variable is 5

console.log("length array:",fruits.length);                  // befor push variable is 6



//===================================================for=================================================
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//===================================================array, legnth, push=================================================
console.log("array fruits length:", fruits.length)

console.log("cucomber in fruits length:", fruits[2].length)

fruits.push("Tomato")


console.log("added fruits length =>", fruits.length)

for (i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}

for (i = 0; i < fruits.length; i++){
    console.log("==>", fruits[i])
}