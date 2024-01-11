var height = +prompt('Nhap chieu cao cua ban (m)');
var weight = +prompt('Nhap can nang cua ban (kg)');
var bmi = weight / (height * height);
if(bmi <= 18.5){
    document.write('Can nang thap gay');
}else if(18.5 < bmi && bmi <=24.9){
    document.write('Binh thuong');
}else if(25 <= bmi && bmi <= 29.9){
    document.write('Thua can');
    document.write('Tien beo phi');
}else if(30 <= bmi && bmi <= 34.9){
    document.write('Beo phi do I');
}else if(35 <= bmi && bmi <= 39.9){
    document.write('Beo phi do II');
}else{
    document.write('Beo phi do III');
}