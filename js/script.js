// .btn-menu 요소를 가져와 btn 변수에 저장
const btn = document.querySelector('.btn-menu');
//.main-nav 요소 가져와서 nav 변수에 저장
const nav = document.querySelector('.main-nav');

// 버튼을 클릭하면
btn.addEventListener('click', () => {
    // nav 요소의 클래스에 'open-menu' 를 토글한다.
    nav.classList.toggle('open-menu');
    // 만약 btn 요소의 innerHTML이  'Menu' 인 경우
    if (btn.innerHTML === 'Menu') {
        // btn 요소의 innerHTML을 'Close'로 변경
        btn.innerHTML = 'Close';
    }
    else {
        btn.innerHTML = 'Menu';
    }

});
const themeBtn = document.querySelector('.btn-theme');

themeBtn.addEventListener('click', () => {
    // body에 'dark' 클래스를 붙였다 뗀다.
    document.body.classList.toggle('dark');
    // body에 'dark' 클래스가 있으면 해 아이콘, 없으면 초승달 아이콘으로 변경
    if (document.body.classList.contains('dark')) {
        themeBtn.innerHTML = '☀️';
    }
    else {
        themeBtn.innerHTML = '🌙';
    }
})

const textarea = document.querySelector('.apply-textarea');
const charCount = document.querySelector('.char-count');

textarea.addEventListener('input', () => {
    const length = textarea.value.length;
    charCount.textContent = length + ' / 200자';

    if (length >= 180 ) {
        charCount.classList.add('warn');
    }
    else {
        charCount.classList.remove('warn');
    }
})

const clockDate = document.querySelector('.clock-date');
const clockTime = document.querySelector('.clock-time');
const days = ['일','월','화','수','목','금','토'];

function updateClock() {
    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    const day = days[now.getDay()];
    clockDate.textContent = year + '년 ' + month + '월 ' + date + '일 (' + day + ')';

    const h = String(now.getHours()).padStart(2,'0');
    const m = String(now.getMinutes()).padStart(2,'0');
    const s = String(now.getSeconds()).padStart(2,'0');
    clockTime.textContent = h + ':' + m + ':' + s;
}

updateClock(); // 페이지 열람시 한 번 실행

// 정해진 시간(밀리초)마다 함수를 계속 실행
setInterval(updateClock, 1000); // 이후 1초마다 반복 실행