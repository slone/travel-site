import throttle from "lodash/throttle";
import debounce from 'lodash/debounce';

class StickyHeader {
	constructor() {
		this.siteHeader = document.querySelector(".site-header");
		this.siteHeaderHeight = this.getHeaderHeight();
		this.pageSections = document.querySelectorAll(".page-section");
		this.browserHeight = window.innerHeight;
		this.previousScrollY = window.scrollY;	
		this.scrollDirection = "down";	
		this.events();
	}

	events() {
		window.addEventListener("scroll", throttle(() => this.runOnScroll(), 300), false);
		window.addEventListener("resize", debounce(() => {this.browserHeight = window.innerHeight; }, 333));
	}

	runOnScroll() {
		this.determineScrollDirection();

		if (window.scrollY > this.siteHeaderHeight) {
			this.siteHeader.classList.add("site-header--dark");
		} else {
			this.siteHeader.classList.remove("site-header--dark");
		}

		this.pageSections.forEach(el => this.calcSection(el));
	}

	determineScrollDirection() {
		let currentScrollY = window.scrollY;
		if (currentScrollY > this.previousScrollY) {
			this.scrollDirection = "down";
		} else {
			this.scrollDirection = "up";
		}
		this.previousScrollY = currentScrollY;
	}

	calcSection(el) {
		if (window.scrollY + this.browserHeight > el.offsetTop 
			&& window.scrollY < el.offsetTop + el.offsetHeight) {
			let scrollPercent = (el.getBoundingClientRect().y / this.browserHeight) *100;
			if (scrollPercent < 18 && scrollPercent > -0.1 && this.scrollDirection == 'down' || scrollPercent < 33 && this.scrollDirection == "up") {
				let matchingLinkId = el.dataset.matchingLinkId;
				document.querySelectorAll(`.primary-nav a:not(#${matchingLinkId})`).forEach(el => el.classList.remove('is-current-link'));
				document.getElementById(matchingLinkId).classList.add("is-current-link");
			}
		}
	}

	getHeaderHeight() {
		return parseInt(window.getComputedStyle(this.siteHeader).height);		
	}
}

export default StickyHeader;