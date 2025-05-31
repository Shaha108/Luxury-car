const menuToggle = document.querySelector(".menu-toggle");
const mainNavigationItems = document.querySelector(".main-navigation-items");

menuToggle.addEventListener("click", () => {
  mainNavigationItems.classList.toggle("active");
});

const bookBtns = document.querySelectorAll(".book-btn");
const popup = document.getElementById("popup");
const closeBtn = document.querySelector(".close-btn");

bookBtns.forEach((button) => {
  button.addEventListener("click", () => {
    popup.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});

const loginBtn = document.getElementById("login-btn");
const popupLogin = document.getElementById("popup-login");
const loginClose = document.querySelector(".close-login-btn");

loginBtn.addEventListener("click", () => {
  popupLogin.style.display = "flex";
});

loginClose.addEventListener("click", () => {
  popupLogin.style.display = "none";
});
