import React, { Component } from 'react';

export default class RouteNotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="d-flex justify-content-center align-items-center" style = {{height:window.innerHeight}}>
        <p style={{fontSize:20,fontWeight:'bold'}}>This Page Does't Exist</p>
      </div>
    );
  }
}
