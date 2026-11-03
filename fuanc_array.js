//==================================function => total, max, average===============================
function maxValue(arr){
    if (arr.length === 0) {
        return "No Array Value";
    }else{    
    return Math.max(...arr);
}    
}

let arr = [12, 1, 7, 9, 14, 19, 28, 42, 16, 29,];
console.log(maxValue(arr))


//==================================function => total===============================
function total (arr){
    return arr.reduce((acc,n) => acc + n, 0);
}

console.log(total(arr))


//==================================function => average===============================

function averag(arr){
    if (arr.length === 0){
        return "This is empty!!"
    }
    return total(arr) / arr.length;
}

console.log(averag(arr))