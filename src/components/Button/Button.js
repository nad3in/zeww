import React, { Component } from 'react' 
import '../Button/WorkspaceButton.css'

class Button extends Component {
    render () {
        return (
            <div>
                <button type="button" className={this.props.buttonStyle} type={this.props.type}>{this.props.text}</button>
            </div>
        )
    }
}

export default Button