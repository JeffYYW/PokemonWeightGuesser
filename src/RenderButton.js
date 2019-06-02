import React, { Component } from 'react';

class RenderButton extends Component {
    
    render() {
        return (
            <button className="resetButton" onClick={() => { window.location.reload() }}>Play Again</button>
            
        )
    }
}

export default RenderButton;