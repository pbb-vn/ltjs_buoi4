let nhietDo = prompt("Nhap nhiet do:");
let rain = prompt("Tinh trang mua? (Y/N)");

if (isNaN(nhietDo)) alert("Nhiet do khong hop le")
else {
  if (rain === "Y") {
    rain = true
    nhietDo > 25 && rain === false ? console.log("Di choi") : console.log("Khong di choi");
  } 
  else if (rain === "N") {
    rain = false
    nhietDo > 25 && rain === false ? console.log("Di choi") : console.log("Khong di choi");
  } 
      else {
          rain = undefined;
          alert("Tinh trang mua khong hop le");
      }
  
}