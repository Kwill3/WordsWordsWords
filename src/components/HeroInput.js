import React from 'react';
import './HeroInput.css'

class HeroInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			word: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleKeypress = this.handleKeypress.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}
  
	handleChange(e) {
		this.setState({
			word: e.target.value
		});
	}

	handleKeypress(e) {
		if (e.key === 'Enter') {
			this.handleSearch();
		}
	}
  
	handleSearch() {
		this.props.searchWord(this.state.word);
		document.getElementById("result-section").scrollIntoView({
			block: 'start',
			behavior: 'smooth',
			inline: 'center'
		});
	}

	render() {
		return (
			<div className='search'>
				<div className="search-field">
					<input type="text" onChange={this.handleChange} onKeyPress={this.handleKeypress} placeholder='Type word here'/>
				</div>
				<div className="search-submit">
					<a onClick={this.handleSearch}>Search word</a>
				</div>
			</div>
		)
	}
}

export default HeroInput;
