import React from 'react';
import './Hero.css';
import HeroInput from './HeroInput';

function Hero() {
	return (
    	<div className="hero-container">
			<h1 className='hero-container-header'>To begin,</h1>
			<p className='hero-container-p'>search for a word...</p>
			<HeroInput />
		</div>
	);
}

export default Hero;
