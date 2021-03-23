const emailField = document.getElementById("forgot-password");
const requestBtn = document.getElementById("request-btn");

emailField.addEventListener("input", () => {
  console.log("works");
  requestBtn.classList.remove("faded");
  requestBtn.classList.add("form-btn");
});
