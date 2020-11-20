import React, { Component } from "react";

class Footer extends Component {
  render() {
    const { containerStyle } = this.props;
    return (
      <div
        style={Object.assign(
          { padding: 5, textAlign: "center",color:'white' },
          containerStyle
        )}
      >
        <p>
          <span>&#169;</span> {new Date().getFullYear()} - App Copyright Section and footer
        </p>
      </div>
    );
  }
}

export default Footer;
