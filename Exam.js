var studentData = [];
// var title = [
//   "studentId",
//   "studentName",
//   "age",
//   "mark_html",
//   "mark_css",
//   "mark_js",
//   "avgMark",
//   "rank",
// ];
//studentData.push(title);
for (var i = 0; i < 5; i++) {
  var studentId = prompt("Nhập mã học sinh:");

  // Nhập mã học sinh và kiểm tra điều kiện

  if (studentId.startsWith("S") && studentId.length == 5) {
    var studentName = prompt("Nhập tên học sinh:");
    if (studentName.length < 6 || studentName.length > 30) {
      console.log(
        "Tên sinh viên phải có từ 6 đến 30 ký tự. Vui lòng nhập lại!"
      );
      i--; // Giảm giá trị biến đếm để nhập lại tên sinh viên
      continue;
    }
    var age = parseInt(prompt("Nhập tuổi:"));
    if (age < 18 || age > 30) {
      console.log(
        "Tuổi sinh viên phải trong khoảng từ 18 đến 30. Vui lòng nhập lại!"
      );
      i--; // Giảm giá trị biến đếm để nhập lại tuổi sinh viên
      continue;
    }
    var mark_html = +prompt("Nhập điểm HTML:");
    var mark_css = +prompt("Nhập điểm CSS:");
    var mark_js = +prompt("Nhập điểm JavaScript:");
    var avgMark = (mark_html + mark_css + mark_js) / 3;
    var rank;
    // Xác định hạng dựa trên điểm trung bình
    if (avgMark >= 8) {
      rank = "Giỏi";
    } else if (avgMark >= 6.5) {
      rank = "Khá";
    } else if (avgMark >= 5) {
      rank = "Trung bình";
    } else {
      rank = "Yếu";
    }
    //Tạo mảng một chiều chứa thông tin học sinh
    var student = [
      studentId,
      studentName,
      age,
      mark_html,
      mark_css,
      mark_js,
      avgMark,
      rank,
    ];
    //thêm
    studentData.push(student);
    console.log(student);
  } else {
    alert("Mã học sinh không hợp lệ. Vui lòng nhập lại!");
    i--; // Giảm giá trị biến đếm để nhập lại mã học sinh
  }
}
// In dữ liệu học sinh
console.log("Dữ liệu học sinh:", studentData);
// Sắp xếp danh sách sinh viên theo điểm trung bình tăng dần
studentData.sort(function (a, b) {
  return a[6] - b[6];
});
var searchName = prompt("Nhập tên sinh viên cần tìm:");
var foundStudents = [];

for (var i = 1; i < studentData.length; i++) {
  var studentName = studentData[i][1]; // Lấy tên sinh viên từ phần tử thứ 2 trở đi (vị trí 1 trong mảng 2 chiều)

  // Kiểm tra nếu tên sinh viên chứa chuỗi tìm kiếm
  if (studentName.includes(searchName)) {
    foundStudents.push(studentName);
  }
}

if (foundStudents.length > 0) {
  console.log("Các sinh viên có tên chứa chuỗi tìm kiếm:");
  console.log(foundStudents);
} else {
  console.log("Không tìm thấy sinh viên có tên chứa chuỗi tìm kiếm.");
}
