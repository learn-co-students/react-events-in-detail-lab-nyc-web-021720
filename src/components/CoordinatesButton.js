import React from 'react';


class CoordinatesButton extends React.Component{
    handleClick = event => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
      };

    render(){
        return (
            <button onClick={this.handleClick}>CoordinatesButton</button>
        )
    }

}

export default CoordinatesButton