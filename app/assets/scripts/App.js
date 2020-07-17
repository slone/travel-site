import "../styles/styles.css";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";

new StickyHeader();
new MobileMenu();
let revealFeaturesOnScroll = new RevealOnScroll(document.querySelectorAll(".feature-item"), 68);
let revealTestimonialsOnScroll = new RevealOnScroll(document.querySelectorAll(".testimonial"), 75);

let modal;

document.querySelectorAll(".open-modal").forEach( el => {
	el.addEventListener("click", e => {
		e.preventDefault();
		if (typeof modal == "undefined") {
			import(/* webpackChunkName: "modal" */"./modules/Modal")
				.then( x => { 
					modal = new x.default();
					setTimeout( () => modal.openModal());
				})
				.catch( () => {	console.error('problem loading modal'); });
		} else {
			modal.openModal();
		}
	});
})

if (module.hot) {
	module.hot.accept();
}

