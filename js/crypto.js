document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("loginForm");
  const message = document.getElementById("message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const input = document.getElementById("password").value.trim();

    if (input.toUpperCase() === "CAIUS") {
      message.style.color = "#00ff66";
      message.textContent = "ACCESS GRANTED...";
      setTimeout(() => {
        window.location.href = "puzzles/puzzle1.html";
      }, 1500);
    } else {
      message.style.color = "#ff0033";
      message.textContent = "ACCESS DENIED. INCIDENT LOGGED.";
    }

  });

});
