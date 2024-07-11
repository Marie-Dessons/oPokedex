function closeModals() {
  const openModal = document.querySelector(".is-active");
  if (openModal) {
    openModal.classList.remove("is-active");
  }
}

export { closeModals };