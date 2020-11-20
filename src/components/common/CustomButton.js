import React, { Component } from 'react';
import {Button} from "react-bootstrap";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import app_theme from '../../app_theme';

const CustomButton = ({buttonStyle,children,backgroundColor,textColor,width,square,withIcon,...props}) => {
  if(square){
    return ( 
      <Button
      style={{
        backgroundColor: backgroundColor || app_theme.colors.success.main,
        border:`2px solid ${app_theme.colors.background.grey}`,
        color: textColor||app_theme.colors.text.grey,
        width: width||"40%",
        fontWeight: "500",
        fontSize:'110%',
        position:'relative',
        ...buttonStyle
      }}
      {...props}
    >
      {children}
     {withIcon && <ArrowForwardIosIcon style={{position:'absolute',right:0}}/>}
    </Button>
   );
  }
    return ( 
        <Button
        style={{
          backgroundColor: backgroundColor || app_theme.colors.success.main,
          borderWidth: 0,
          border:`2px solid ${app_theme.colors.background.grey}`,
          color: textColor||app_theme.colors.text.grey,
          borderRadius: 20,
          width: width||"40%",
        fontWeight: "500",
          fontSize:'110%',
          position:'relative',
          ...buttonStyle
        }}
        {...props}
      >
        {children}
        {withIcon && <ArrowForwardIosIcon style={{position:'absolute',right:0}}/>}
      </Button>
     );
}
 
export default CustomButton;