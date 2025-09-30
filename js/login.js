document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let user = users.find(u => u.email === email && u.password === password);

  if (user) {
    alert("Đăng nhập thành công!");
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "index.html"; // chuyển về trang chủ
  } else {
    alert("Sai email hoặc mật khẩu!");
  }
});
