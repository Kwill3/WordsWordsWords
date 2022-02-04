import React from 'react';
import './BackToTop.css';

function BackToTop() {
	const toTop = document.querySelector(".to-top");

	window.addEventListener("scroll", () => {
		if (window.pageYOffset > 100) {
			toTop.classList.add("active");
		} else {
			toTop.classList.remove("active");
		}
	})
  	return (
    	<a href='#' className='to-top'>
			<i className="fas fa-chevron-up"></i>
    	</a>
	);
}

export default BackToTop;
