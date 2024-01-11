var x = +prompt('Nhap so thang trong nam');

switch (x) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log('Thang co 31 ngay');
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log('Thang co 30 ngay');
        break;
    case 2:
        console.log('Thang co 28 29 ngay');
        break;
    default:
        console.log('Khong hop le');
}
