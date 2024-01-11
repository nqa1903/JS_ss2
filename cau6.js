var eng = +prompt('Nhap vao diem tieng anh');
var liter = +prompt('Nhap vao diem van');
var math = +prompt('Nhap vao diem toan');
var avarage = (eng + liter + math)/3;
if(8 <= avarage && avarage <= 10){
    document.write('Hoc sinh gioi');
}else if(6.5 <= avarage && avarage <= 7.9){
    document.write('Hoc sinh kha');
}else if(5 <= avarage && avarage <= 6.4){
    document.write('Hoc sinh trung binh');
}else{
    document.write('Hoc sinh yeu');
}