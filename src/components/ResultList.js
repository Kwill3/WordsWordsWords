import React from 'react';
import Result from './Result';
import './ResultList.css';

class ResultList extends React.Component {
	
	render() {
		return (
			<div className='ResultList-container'>				
				<div className='ResultList'>
					<h1 id='result-section'>
						{this.props.results === '' ? <p className='ResultList-enter'>Enter a word in the search bar above to begin..</p> : <p>Results for {this.props.word}:</p> }
					</h1>
					{this.props.results.map(a => <Result key={a.definition} results={a}/>)}
				</div>
			</div>
		)
	}
}

export default ResultList;
