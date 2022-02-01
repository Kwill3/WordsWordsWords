import React from 'react';
import './Result.css';

class Result extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='result'>
                <div className="result-definition">
                    <h2>{this.props.results.definition}</h2>
                </div>
            </div>
        )
    }
}

export default Result;
