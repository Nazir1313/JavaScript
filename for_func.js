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

// console.log(sumOneToNine(9))



//================================================================================================
//  تابع و نام تابع میسازم و با پارامتر که فروشنده میفرسته تخفیف رو بر ۱۰۰ تقسیم میکنی
//بعد قیمت رو بر نتیجه تقسیم میکنیم
//  100% - 20%  ==> 200 

function offer(price){
    let off = price / ( 100 /  20);
    let offer_result = price - off;
    return offer_result
}
console.log(offer(300))


//تمام محصولات رو می‌فرستیم و قیمت همه رو جمع میکند و بر تعداد محصولات تقسیم میکنه تا میانگین به دست بیاد
// all ==> price and length

function average(prices, field){
    return product.reduce((totall, item)=>{
        const n = Number(item?.[field]);
        return Number.isFinite(n) ? totall + n : totall;
    }, 0);

    // let avrageProduct = ((products.price) / (products.length));
    
}

const product = [{'name':'shoes', 'price': 400}, {'name':'bage', 'price': 240}, {'name':'whait shoes', 'price' : 150}, {'name':'book', 'price': 40}, {'name':'apple phone', 'price': 1500},{'name': 'speeker', 'price': 300}]
console.log(average(product))


//یک تابع که تمام محصولات رو شمارش میکنه
// a = id ==> list => length list                                                     


