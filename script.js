document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const responseMessage = document.getElementById("responseMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // 폼 기본 제출 동작 방지

    // 폼 초기화
    form.reset();

    // “감사합니다” 메시지 표시
    responseMessage.classList.remove("hidden");

    // 3초 후 메시지 숨기기
    setTimeout(() => {
      responseMessage.classList.add("hidden");
    }, 3000);
  });
});