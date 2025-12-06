let value = prompt("Nhập giá trị:");
let donVi = prompt("Nhập đơn vị: (celsius/fahrenheit)");

if (isNaN(value)) console.log("Giá trị không hợp lệ")
else {
  switch(donVi) {
    case "celsius":
      value=value*1.8+32;
      console.log("Chuyển đổi: " + value.toFixed(1) + " độ F");
      break;
    case "fahrenheit":
      value=(value-32)/1.8;
      console.log("Chuyển đổi: " + value.toFixed(1) + " độ C");
      break;
  }
}