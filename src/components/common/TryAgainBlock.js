import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import CustomButton from './CustomButton';
import app_theme from '../../app_theme';

const TryAgainBlock = ({containerStyle,onClickTryAgain}) => {
    return ( 
        <Card style={{minHeight:200,display:'flex',justifyContent:'center',alignItems:'center',...containerStyle}}>
            <CustomButton backgroundColor={app_theme.colors.error.main} onClick={onClickTryAgain}>
                TRY AGAIN
            </CustomButton>
        </Card>
     );
}
 
export default TryAgainBlock;