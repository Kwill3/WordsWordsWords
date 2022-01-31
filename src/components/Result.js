import React from 'react';

class Result extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='Result'>
                <div className="definition">
                    <h2>{this.props.definition}</h2>
                </div>
            </div>
        )
    }
}

export default Result;
