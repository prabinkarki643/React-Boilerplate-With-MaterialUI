import React from "react";
import PropTypes from 'prop-types';
const styles = {
  containerStyle: {
    display: "flex",
    padding: 5,
    minHeight: 50,
    backgroundColor: 'white',
    color:'black'
  },
  leftContainerStyle: {
    display: 'flex',
    flex:1,
    justifyContent:'flex-start',
    alignItems: 'center'
  },
  centerContainerStyle: {
    display: 'flex',
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },
  rightContainerStyle: {
      display: 'flex',
      justifyContent:'flex-end',
      alignItems: 'center'
  },
};
const Header = ({ headerLeft, headerCenter, headerRight,containerStyle,leftContainerStyle,centerContainerStyle,rightContainerStyle,noCenter ,...props}) => {
  return (
    <div style={{...styles.containerStyle,...containerStyle}} {...props}>
      <div style={{...styles.leftContainerStyle,...leftContainerStyle}}>
          <div>{headerLeft}</div>
      </div>

      {!noCenter && <div style={{...styles.centerContainerStyle,...centerContainerStyle}}>
      <div>{headerCenter}</div>
      </div>}

      <div style={{...styles.rightContainerStyle,...rightContainerStyle}}>
        <div>{headerRight}</div>
      </div>
    </div>
  );
};

export default Header;

Header.defaultProps={
    headerLeft:<div>Left</div>,
    headerCenter:<div>Center</div> ,
    headerRight:<div>Right</div> ,
    noCenter:false
}

// Header.PropTypes = {
//     headerLeft:PropTypes.oneOfType([
//         PropTypes.element,
//         PropTypes.string
//     ]),
//     headerCenter:PropTypes.oneOfType([
//         PropTypes.element,
//         PropTypes.string
//     ]),
//     headerRight:PropTypes.oneOfType([
//         PropTypes.element,
//         PropTypes.string
//     ]),
//     containerStyle:PropTypes.object,
//     leftContainerStyle:PropTypes.object,
//     centerContainerStyle:PropTypes.object,
//     rightContainerStyle:PropTypes.object,
//     noCenter:PropTypes.bool
// }
