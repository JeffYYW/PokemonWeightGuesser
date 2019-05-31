import React, { Component } from 'react';

class EndMessage extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return (
            <div className="endMessage">
                <h2>{this.props.message}</h2>
            </div>
        )
    }
}

export default EndMessage;