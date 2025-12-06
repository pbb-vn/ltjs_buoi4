let ngay = prompt("Nhập 1 số từ 1-7:");

switch (ngay) {
  case "1":
    console.log("Thứ 2");
    break;
  case "2":
    console.log("Thứ 3");
    break;
  case "3":
    console.log("Thứ 4");
    break;
  case "4":
    console.log("Thứ 5");
    break;
  case "5":
    console.log("Thứ 6");
    break;
  case "6":
  case "7":
    console.log("Nghỉ ngơi");
    break;
  default:
    console.log("Ngày nhập không hợp lệ");
}
