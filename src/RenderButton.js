import React, { Component } from 'react';

class RenderButton extends Component {
    render() {
        return (
            <button onClick={() => { window.location.reload() }}>Try Again</button>
        )
    }
}

export default RenderButton;