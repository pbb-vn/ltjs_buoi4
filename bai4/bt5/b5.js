let diem = prompt("Nhap diem:");
diem = Number(diem);

switch (true) {
    case (diem>=90 && diem<=100):
        console.log("Gioi");
        break;
    case (diem>=70 && diem<=89):
        console.log("Kha");
        break;
    case (diem>=50 && diem<=69):
        console.log("Trung binh");
        break;
    case (diem<50 && diem>=0):
        console.log("Yeu");
        break;
    default:
        console.log("Diem khong hop le");
};