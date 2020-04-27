import React from 'react'

class CoordinatesButton extends React.Component {

    onClick = event => this.props.onReceiveCoordinates([event.clientX, event.clientY])

    render() {
        return <button onClick={this.onClick}></button>
    }
}

export default CoordinatesButton