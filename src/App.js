import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResultList from './components/ResultList';
import BackToTop from './components/BackToTop';
import Words from "./util/Words";
import './App.css';

class App extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
      		results: [],
			word: ''
    	}
    	this.searchWord = this.searchWord.bind(this);
  	}

	searchWord(word) {
		Words.search(word).then(results => this.setState({results, word}));
	}

	render() {
		return (
		<>
			<Navbar />
			<Hero searchWord={this.searchWord} results={this.state.results}/>
			<ResultList results={this.state.results} word={this.state.word}/>
			<BackToTop />
		</>
		)
	}
}

export default App;
