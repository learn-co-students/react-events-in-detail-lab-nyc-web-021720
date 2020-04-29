// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {
	onClick = (e) => {
		const newArray=[e.clientX, e.clientY]
		this.props.onReceiveCoordinates(newArray)
	}
	render() {
		return(
			<button onClick={ this.onClick}></button>
		)
	}
}

export default CoordinatesButton