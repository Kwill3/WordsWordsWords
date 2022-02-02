import React from 'react';
import Result from './Result';
import './ResultList.css';

class ResultList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='ResultList' id='result-section'>
				{this.props.results.map(a => <Result key={a.definition} results={a}/>)}
		  	</div>
		)
	}
}

export default ResultList;
