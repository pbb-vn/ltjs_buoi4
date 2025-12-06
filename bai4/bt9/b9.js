let role = prompt("Nhập vai trò: (admin/user/guest)");
let age = prompt("Nhập tuổi:");

if (role === "admin") console.log("Được phép")
else {
  if (role !== "admin" && role !== "user" && role !== "guest") console.log("Vai trò không hợp lệ")
    else {
      if (isNaN(age) || age <= 0 || age > 100) console.log("Tuổi không hợp lệ")
      else {
          if (role === "user" && age >= 18) console.log("Được phép")
          else {
            if (role === "guest" || (role === "user" && age <18)) console.log("Không được phép")
        }
      }
    }
}
