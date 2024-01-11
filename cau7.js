var a = +prompt('Nhap vao so a');
var b = +prompt('Nhap vao b');
var c = +prompt('Nhap vao c');
if(a >= b && a >= c){
    console.log('So lon nhat la' , a);
}else if(b >= a && b >= c){
    console.log('So lon nhat la' , b);
}else{
    console.log('So lon nhat la' , c);
}