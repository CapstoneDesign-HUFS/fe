// 출생년도 자동 생성
const birthSelect = document.getElementById("birthYear");
const currentYear = new Date().getFullYear();
const startYear = 1950;
const endYear = currentYear - 10;

for (let year = endYear; year >= startYear; year--) {
  const option = document.createElement("option");
  option.value = year;
  option.textContent = year + "년";
  birthSelect.appendChild(option);
}

// 회원가입 폼 제출 이벤트
document.querySelector(".signup-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const pw = document.getElementById("password").value;
  const pwConfirm = document.getElementById("passwordConfirm").value;
  const agreed = document.getElementById("agreeCheck").checked;
  const name = document.querySelector("input[placeholder='이름']").value || "회원";

  if (pw !== pwConfirm) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  if (!agreed) {
    alert("약관에 동의해주세요.");
    return;
  }

  document.getElementById("modalUserName").textContent = name;
  new bootstrap.Modal(document.getElementById("signupSuccessModal")).show();
});
