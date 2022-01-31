import React from 'react';
import Result from './Result';

class ResultList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='ResultList'>
				{this.props.results.map(a => <Result key={a.definition} results={a}/>)}
		  	</div>
		)
	}
}

export default ResultList;
