import React from 'react';
import Result from './Result';
import './ResultList.css';

class ResultList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='ResultList-container'>				
				<div className='ResultList'>
					<h1 id='result-section'>{this.props.results == '' ? 'Enter a word in the search bar above to begin..' : 'Results'}</h1>
					{this.props.results.map(a => <Result key={a.definition} results={a}/>)}
				</div>
			</div>
		)
	}
}

export default ResultList;
