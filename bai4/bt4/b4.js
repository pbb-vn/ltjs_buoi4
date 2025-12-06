let number1 = prompt("Nhập số đầu tiên");
let number2 = prompt("Nhập số thứ 2");
let operator = prompt("Nhập toán tử");
let ketqua;
number1 = Number(number1);
number2 = Number(number2);




if (operator === '/' && number2 === 0) {console.log("Khong the chia cho 0")}
else {
    switch (operator) {
        case "+": 
           ketqua=number1+number2;
           console.log("Ket qua: " + ketqua);
           break;
        case "-":
            ketqua=number1-number2;
            console.log("Ket qua: " + ketqua);
            break;
        case "*":
            ketqua=number1*number2;
            console.log("Ket qua: " + ketqua);
            break;
        case "/":
            ketqua=number1/number2;
            console.log("Ket qua: " + ketqua);
            break;
        default:
            console.log("Du lieu da nhap khong hop le")
    };
};