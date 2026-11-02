// Exercise for and function => arguman, parametr, Scope, function

function algorism(a, c){
    let result = 0;                     //init variable , This Scop function algorism => block scop
    return result = a * c / 2;          //after value delet and add new value
}

let difind_num = 12;                    //out variable or global variable

let n = algorism(2, 6);                 // function put in variable n
// console.log(n);                         //print function
// console.log(result);



//================================================================================================

function sumOneToNine(a){           //difine name function and paramer
    let sum = 0;                    // keeper variable number of for loop

    for(let i = 1; i <= a; i++){    // Start for with if
        sum = sum + i;              // administration body for,
    }
    return(sum)                     // return in if or finish function.
}

console.log(sumOneToNine(9))