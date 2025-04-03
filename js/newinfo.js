function saveUserInfo() {
    const name = document.getElementById('user-name').value;
    const birth = document.getElementById('user-birth').value;
    const gender = document.getElementById('user-gender').value;

    // 나이대 계산
    const currentYear = new Date().getFullYear();
    const age = currentYear - birth;
    const ageGroup = Math.floor(age / 10) * 10 + '대';

    localStorage.setItem('userName', name);
    localStorage.setItem('userBirth', birth);
    localStorage.setItem('userGender', gender === 'male' ? '남성' : '여성');
    localStorage.setItem('userAgeGroup', ageGroup);
  }