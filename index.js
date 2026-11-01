const num = 'number';
console.log(num);

const user = {name: "saeid"};       // این متغییر داخل محدوده تعریف شده
console.log(user.name);

var old = 12;           // این متغییر قدیمی هست و محدوده نمیشناسه هرجای فایل میتونه دوباره تعریف بشه
console.log(old);       

var old = 13
console.log(old);       // متغییر قبلی هست و قابلیت دوباره تعریف شدن رو داره و میبینیم هیچ خطایی نداده

let user_name = {name: "Hasan"}; // متغییر دارای محدوده تعیین شده با آکولاد هست،و  دوباره تعریف نمیشه
console.log(user_name.name);

// let user_name = {name: "Hamid"} //گرفتم Cannot redeclare block-scoped variable 'user_name'.همان متغییر رو باز تعریف کردم خطای
