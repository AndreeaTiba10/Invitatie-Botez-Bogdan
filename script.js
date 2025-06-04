const submitBtn = document.getElementById("submit-btn");
const dialog = document.querySelector(".form-container");
const closeBtn = document.getElementById("close-btn");

submitBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});


