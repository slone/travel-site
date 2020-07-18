class Modal {
	constructor() {
		this.injectHTML();
		this.modal = document.querySelector(".modal");
		this.closeModalButton = document.querySelector(".modal__close");
		this.events();
	}

	events() {
		// listen for close click
		this.closeModalButton.addEventListener("click", e => this.closeModal(e));

		// pushes any key (listen for escape key)
		document.addEventListener("keyup", e => this.onKeyPress(e));
	}

	openModal() {
		this.modal.classList.add("modal--is-visible");
	}

	closeModal() {
		this.modal.classList.remove("modal--is-visible");
	}

	onKeyPress(e) {
		if (e.keyCode == 27) {
			this.closeModal();
		}
	}

	injectHTML() {
		document.body.insertAdjacentHTML('beforeend', `

	<div class="modal">
		<div class="modal__inner">
			<h2 class="section-title section-title--blue section-title--less-margin"><img src="assets/images/icons/mail.svg" class="section-title__icon"> Get in <strong>Touch</strong></h2>
			<div class="wrapper wrapper--narrow">
				<p class="modal__description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>
			</div>

			<div class="social-icons">
				<a href="#" class="social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Our Facebook page"></a>
				<a href="#" class="social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Our Twitter page"></a>
				<a href="#" class="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Our Instagram page"></a>
				<a href="#" class="social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="Our YouTube page"></a>
			</div>
		</div>
		<div class="modal__close">X</div>
	</div>

		`);


	}
}

export default Modal;