import React from 'react';


class DelayedButton extends React.Component{

    handleClick = event => {
        event.persist()
        this.props.onDelayedClick(event);
      };

    render(){
        return (
            <button onClick= {this.handleClick}>DelayedButton</button>
        )
    }

}

export default DelayedButton