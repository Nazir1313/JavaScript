// const num = 'number';
// console.log(num);

// const user = {name: "saeid"};       // این متغییر داخل محدوده تعریف شده
// console.log(user.name);

// var old = 12;           // این متغییر قدیمی هست و محدوده نمیشناسه هرجای فایل میتونه دوباره تعریف بشه
// console.log(old);       

// var old = 13
// console.log(old);       // متغییر قبلی هست و قابلیت دوباره تعریف شدن رو داره و میبینیم هیچ خطایی نداده

// let user_name = {name: "Hasan"}; // متغییر دارای محدوده تعیین شده با آکولاد هست،و  دوباره تعریف نمیشه
// console.log(user_name.name);

//// let user_name = {name: "Hamid"} //گرفتم Cannot redeclare block-scoped variable 'user_name'.همان متغییر رو باز تعریف کردم خطای



//=====================================================================================================
let str = "document";  // string
let num = 23;           // number
let bool = true;        //Boolean
let nuthing = null;     //mostly empty
let undef;              // undefind
let sym = Symbol;       //sybol
let big = 123n;         //big number
let obj = {a: 1};       // object=> key = value


//===================================================function's==================================================
let age = 19;

if (age >= 18){     // statemend if
console.log("man")  //respons1=> print man
}else{
    console.log("childe")  //respons2=> print child
}

let user_name = "Hadi"

if (user_name === "Hadi"){
    console.log("Hi",user_name) // function 2
}else{
    console.log("Undefind")
}