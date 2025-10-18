let slides = document.querySelectorAll(".slide");
let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }
  setInterval(nextSlide, 5000);

const passwordField = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    togglePassword.src = "eyes-open.jpg"; 
  } else {
    passwordField.type = "password";
    togglePassword.src = "eyes-closes.png"; 
  }
});



