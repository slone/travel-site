import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class RevealOnScroll {
	constructor(collection, thresholdPercent) {
		this.itemsToReveal = collection;
		this.thresholdPercent = thresholdPercent;
		this.hideInitially();
		this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
		this.events();

		this.browserHeight = window.innerHeight; 
	}

	events() {
		window.addEventListener("scroll", this.scrollThrottle);
		window.addEventListener("resize", debounce(() => {this.browserHeight = window.innerHeight; }, 333));
	}

	calcCaller() {
		this.itemsToReveal.forEach( el => {
			if (!el.isRevealed) this.calculateIfScrolledTo(el);
		});
	}

	hasScrolledTo(el) {
		return window.scrollY + this.browserHeight > el.offsetTop;
	}

	hideInitially() {
		this.itemsToReveal.forEach(el => {
			el.classList.add("reveal-item");
			el.isRevealed = false;

		});
		this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
	}

	calculateIfScrolledTo(el) {
		if (this.hasScrolledTo(el)) {
			
			let scrollPercent = (el.getBoundingClientRect().y / this.browserHeight)*100;
			if (scrollPercent < this.thresholdPercent) {
				el.isRevealed = true;
				el.classList.add("reveal-item--is-visible");
				if (el.isLastItem) {
					window.removeEventListener("scroll", this.scrollThrottle);
				}
			}
		}
	}

}

export default RevealOnScroll;