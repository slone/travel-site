import "../styles/styles.css";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";

let stickyHeader = new StickyHeader();
let mobileMenu = new MobileMenu();
let revealFeaturesOnScroll = new RevealOnScroll(document.querySelectorAll(".feature-item"), 68);
let revealTestimonialsOnScroll = new RevealOnScroll(document.querySelectorAll(".testimonial"), 75);


if (module.hot) {
	module.hot.accept();
}

