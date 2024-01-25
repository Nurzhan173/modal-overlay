
class Modal {
  constructor(triggerEl, submit) {
    const closeBtnEl = document.querySelector('.close-modal-btn');
    const triggerBtn = document.querySelector(triggerEl);

    this.overlayEl = document.querySelector(`#${triggerBtn.dataset.modelId}`);

    const acceptOfferEl = document.querySelector('.submit-modal-btn');

    closeBtnEl.addEventListener("click", this.closeModal);
    triggerBtn.addEventListener("click", this.openModal);
    acceptOfferEl.addEventListener("click", this.acceptOffer);

    this.submitCallback = submit;

    this.overlayEl.addEventListener("click", (e) => {
      if(e.target.id === triggerBtn.dataset.modelId) {
        this.closeModal();
      }
    })
  }

  acceptOffer = () => {
    this.closeModal();
    this.submitCallback();
  }

  closeModal = () => {
    this.overlayEl.classList.add("hidden");
  }

  openModal = () => {
    this.overlayEl.classList.remove("hidden");
  }
}

const submit = () => {
  const acceptOfferEl = document.querySelector('.modal-accept');
  const triggerBtn = document.querySelector('#modal-trigger');

  triggerBtn.classList.add("hidden");
  acceptOfferEl.classList.remove("hidden");
}

const modal = new Modal('#modal-trigger',submit);
