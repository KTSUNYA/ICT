const root = document.documentElement;
const themeBtn = document.getElementById("themeBtn");

// Start from the visitor's system theme (dark is the default)
const startLight = window.matchMedia("(prefers-color-scheme: light)").matches;
setTheme(startLight ? "light" : "dark");

// One button, one fixed label. aria-pressed says whether light theme is on.
themeBtn.addEventListener("click", function () {
  const isLight = root.getAttribute("data-theme") === "light";
  setTheme(isLight ? "dark" : "light");
});

function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  themeBtn.setAttribute("aria-pressed", theme === "light");
}

// Newsletter form: clear feedback, no popups, nothing blocks the page
const form = document.getElementById("newsForm");
const email = document.getElementById("email");
const status = document.getElementById("status");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!email.checkValidity()) {
    status.textContent = "Please enter a valid email address, like you@example.com.";
    email.focus();
    return;
  }
  status.textContent = "Thanks for subscribing! (Thousands of cat pics on your way!!!)";
  form.reset();
});
