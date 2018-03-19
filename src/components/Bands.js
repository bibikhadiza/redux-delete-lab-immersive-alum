import React, { Component } from 'react';
import Band from './Band';

class Bands extends Component {
  render() {
    const band = this.props.store.getState().bands.map((e) => { return <li><Band band={e} store={this.props.store} id={e.id}/></li>})
    return(
      <ul>
        {band}
      </ul>
    );
  }
};

export default Bands;
