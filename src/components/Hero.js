import React from 'react';
import './Hero.css';
import HeroInput from './HeroInput';

class Hero extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="hero-container">
				<h1 className='hero-container-header'>To begin,</h1>
				<p className='hero-container-p'>search for a word...</p>
				<HeroInput searchWord={this.props.searchWord}/>
			</div>
		);
	}

}

export default Hero;
