(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    backdrop: document.querySelector("[data-backdrop]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", closeModal);

  function toggleModal() {
    refs.backdrop.classList.toggle("is-hidden");
    refs.modal.classList.toggle("is-hidden");
  }

  function closeModal() {
    toggleModal();
    deactivateRequired();
  }

  function deactivateRequired() {
    const inputElements = document.querySelectorAll("[required]");
    inputElements.forEach((input) => {
      input.required = false;
    });
  }
})();
