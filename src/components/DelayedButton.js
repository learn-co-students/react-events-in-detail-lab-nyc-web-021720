// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {
	onClick = (e) => {
		e.persist()
		window.setTimeout(() => {this.props.onDelayedClick(e)}, this.props.delay)
	}
	render() {
		return(
		<button onClick={this.onClick}></button>
		)
	}
}

export default DelayedButton