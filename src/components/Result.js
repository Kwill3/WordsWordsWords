import React from 'react';
import './Result.css';

class Result extends React.Component {
    
    render() {
        return (
            <div className='result'>
                <div className="result-definition">
                    <h2>{this.props.results.definition}</h2>
                    <p>{this.props.results.partOfSpeech ? '(' + this.props.results.partOfSpeech + ')' : ''}</p>
                </div>
            </div>
        )
    }
}

export default Result;
