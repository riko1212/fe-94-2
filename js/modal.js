(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    backdrop: document.querySelector('.backdrop'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.backdrop.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
