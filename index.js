document
  .getElementById("nicknameForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const nickname = document.getElementById("nickname").value.trim();

    if (nickname === "") {
      alert("Please enter a scientific nickname to proceed.");
      return;
    }

    const welcomeMessage = document.getElementById("welcomeMessage");
    welcomeMessage.textContent = `Welcome, ${nickname}! We re thrilled to have you in the Science Students' Group.`;
    welcomeMessage.style.display = "block";

    setTimeout(() => {
      window.location.href = "https://chat.whatsapp.com/B6hI7e6L3Ro0e6gDENYdkH";
    }, 2000);
  });
