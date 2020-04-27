import React from 'react'

class DelayedButton extends React.Component {

    onClick = event => {
        event.persist()
        window.setTimeout(this.props.onDelayedClick(event), this.props.delay)
    }

    render() {
        return <button onClick={this.onClick}></button>
    }
}

export default DelayedButton