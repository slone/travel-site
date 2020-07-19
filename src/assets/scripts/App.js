import "../styles/styles.css";
import "lazysizes";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import ClientArea from "./modules/ClientArea";


//React related code here
import React from 'react';
import ReactDOM from 'react-dom';
import MyAmazingComponent from './modules/MyAmazingComponent';


ReactDOM.render(<MyAmazingComponent />, document.getElementById("my-react-example"));


new StickyHeader();
new MobileMenu();
new ClientArea();
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

