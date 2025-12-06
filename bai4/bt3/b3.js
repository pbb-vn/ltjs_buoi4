let year = prompt("Nhap nam:");

if (year % 400 === 0) {console.log("Nam nhuan")}
else if (year % 4 === 0 && year % 100 !== 0) {console.log("Nam nhuan")}
    else {console.log("Nam khong nhuan")};