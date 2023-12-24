const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector(".js-backdrop"),
};

refs.openModalBtn.addEventListener("click", openBackdrop);
refs.closeModalBtn.addEventListener("click", closeBackdrop);
refs.backdrop.addEventListener("click", onBackdropClick);
window.addEventListener("keydown", onEscKeypress);

function openBackdrop(e) {
  document.body.classList.add("show-modal");
}

function closeBackdrop(e) {
  document.body.classList.remove("show-modal");
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    console.log("Click on Backdrop");
    closeBackdrop();
  }
}

function onEscKeypress(e) {
  const ESC_KEY_CODE = "Escape";
  const isEscKey = e.code === ESC_KEY_CODE;
  isEscKey ? closeBackdrop() : null;
}
