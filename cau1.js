var x = +prompt('Moi ban nhap nam sinh :');
var year = 2024;
if(x > 1990 || x < 2025){
    var age = year - x;
    document.write('Tuoi cua ban la : ',age);
}else{
    document.write('Nam sinh khong hop le');
}