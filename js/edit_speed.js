const user = {
  name: localStorage.getItem('userName') || '김민지',
  age: localStorage.getItem('userAgeGroup') || '20대',
  gender: localStorage.getItem('userGender') || '여성',
  speeds: {
    minWalk: parseFloat(localStorage.getItem('minWalk')) || 5.0,
    minFastWalk: parseFloat(localStorage.getItem('minFastWalk')) || 6.5,
    minRun: parseFloat(localStorage.getItem('minRun')) || 7.5,
    maxWalk: parseFloat(localStorage.getItem('maxWalk')) || 6.0,
    maxFastWalk: parseFloat(localStorage.getItem('maxFastWalk')) || 7.0,
    maxRun: parseFloat(localStorage.getItem('maxRun')) || 8.0,
  }
};

document.getElementById('userName').textContent = user.name;
document.getElementById('userAge').textContent = user.age;
document.getElementById('userGender').textContent = user.gender;

// 속도 값 렌더링
document.getElementById('minWalkVal').textContent = user.speeds.minWalk;
document.getElementById('minFastWalkVal').textContent = user.speeds.minFastWalk;
document.getElementById('minRunVal').textContent = user.speeds.minRun;
document.getElementById('maxWalkVal').textContent = user.speeds.maxWalk;
document.getElementById('maxFastWalkVal').textContent = user.speeds.maxFastWalk;
document.getElementById('maxRunVal').textContent = user.speeds.maxRun;

function saveSpeed() {
  const minSpeedId = document.querySelector('input[name="minspeed"]:checked')?.id;
  const maxSpeedId = document.querySelector('input[name="maxspeed"]:checked')?.id;

  if (!minSpeedId || !maxSpeedId) {
    alert("최저/최고 속도를 모두 선택해주세요");
    return;
  }

  const minVal = user.speeds[minSpeedId];
  const maxVal = user.speeds[maxSpeedId];

  if (minVal >= maxVal) {
    const modal = new bootstrap.Modal(document.getElementById("speedErrorModal"));
    modal.show();
    return;
  }

  localStorage.setItem('selectedMinSpeed', minSpeedId);
  localStorage.setItem('selectedMaxSpeed', maxSpeedId);
  localStorage.setItem('minSpeedValue', minVal);
  localStorage.setItem('maxSpeedValue', maxVal);

  window.location.href = "edit-info.html";
}