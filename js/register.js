document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Mật khẩu nhập lại không khớp!");
    return;
  }

  // Lấy danh sách users trong localStorage (nếu có)
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Kiểm tra email đã tồn tại chưa
  let exists = users.find(user => user.email === email);
  if (exists) {
    alert("Email đã được sử dụng!");
    return;
  }

  // Thêm user mới
  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Đăng ký thành công! Mời bạn đăng nhập.");
  window.location.href = "login.html";
});
