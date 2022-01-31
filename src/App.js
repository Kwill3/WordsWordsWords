import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResultList from './components/ResultList';
import Words from "./util/Words";
import './App.css';

class App extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
      		results: []
    	}
    	this.searchWord = this.searchWord.bind(this);
  	}

	searchWord(word) {
		Words.search(word).then(results => this.setState({results}));
	}

	render() {
		return (
		<>
			<Navbar />
			<Hero searchWord={this.searchWord}/>
			<ResultList results={this.state.results}/>
		</>
		)
	}
}

export default App;
