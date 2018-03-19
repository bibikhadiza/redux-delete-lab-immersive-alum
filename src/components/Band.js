import React, { Component } from 'react';

class Band extends Component {
  handleClick(ev){
    ev.preventDefault()
    this.props.store.dispatch({state: this.props.store, type: 'DELETE_BAND', id: this.props.band.id})
  }

  render() {
    return(
      <li>
        {this.props.band.text}
        <button onClick={this.handleClick.bind(this)}/>
      </li>
    );
  }
};

export default Band;
