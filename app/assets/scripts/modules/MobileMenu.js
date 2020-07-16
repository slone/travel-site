class MobileMenu {
	constructor() {
		this.menuIcon = document.querySelector(".site-header__menu-icon");
		this.target = document.body;
		this.events();
	}

	events() {
		this.menuIcon.addEventListener("click", () => this.toggle(), false);
	}

	toggle() {
		this.target.classList.toggle("nav-open");
	}
}

export default MobileMenu;