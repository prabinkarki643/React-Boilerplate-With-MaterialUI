import React, { Component } from "react";
import app_theme from "../../app_theme";

class UnderlineText extends Component {
  render() {
    const { children,variant,underlineColor,underlineWidth, ...props } = this.props;
    return (
      <div>
        <style jsx>{`
          .underline {
            text-decoration: none;
            position: relative;
            display: inline-block;
          }
          .underline:after {
            position: absolute;
            content: "";
            height: 2px;
            /* adjust this to move up and down. you may have to adjust the line height of the paragraph if you move it down a lot. */
            bottom: -2px;
            /* center - (optional) use with adjusting width */
            margin: 0 auto;
            left: 0;
            width: ${underlineWidth||'60%'};
            background: ${variant?(variant=="primary"?app_theme.colors.primary.dark:app_theme.colors.secondary.dark):underlineColor||app_theme.colors.error.main} ;
            /* optional animation */
            -o-transition: 0.5s;
            -ms-transition: 0.5s;
            -moz-transition: 0.5s;
            -webkit-transition: 0.5s;
            transition: 0.5s;
          }
        `}</style>
        <div className="underline" {...props}>{children}</div>
      </div>
    );
  }
}

export default UnderlineText;
