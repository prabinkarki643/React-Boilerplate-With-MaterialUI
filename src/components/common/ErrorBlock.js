import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

export default class ErrorBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
        show:true
    };
  }

  render() {
      const{errorData,...props} = this.props
    return (
        <Alert style={{}} show = {this.state.show} variant="danger" onClose = {()=>this.setState({show:false})} {...props}>
        <Alert.Heading >
        <span onClick={()=>this.setState({show:false})} style={{float:"right"}}>&times;</span>
        <div style={{clear:"both"}} />
        <div>
        <p style={{textAlign:"center",fontFamily:"lato bold"}}>{errorData.message?errorData.message:"Oh snap! You got an error!"}</p>
        </div>
        </Alert.Heading>
            {errorData.data?errorData.data.map((item,key)=><p style={{fontFamily:"lato bold"}} key = {key}>{item.msg}</p>):null}
        </Alert>
    );
  }
}


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Alert, AlertTitle } from '@material-ui/lab';
// import IconButton from '@material-ui/core/IconButton';
// import Collapse from '@material-ui/core/Collapse';
// import Button from '@material-ui/core/Button';
// import CloseIcon from '@material-ui/icons/Close';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     '& > * + *': {
//       marginTop: theme.spacing(2),
//     },
//   },
// }));

// export default function ErrorBlock(props) {
//   const{errorData,...otherProps} = props
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(true);
//   return (
//     <div className={classes.root}>
//       <Collapse in={open}>
//         <Alert
//           severity="error"
//           action={
//             <IconButton
//               aria-label="close"
//               color="inherit"
//               size="small"
//               onClick={() => {
//                 setOpen(false);
//               }}
//               {...otherProps}
//             >
//               <CloseIcon fontSize="inherit" />
//             </IconButton>
//           }
//         >
//           <AlertTitle>{errorData.message?errorData.message:"Oh snap! You got an error!"}</AlertTitle>
//           {errorData.data?errorData.data.map((item,key)=><p style={{fontFamily:"lato bold"}} key = {key}>{item.msg}</p>):null}
//         </Alert>
//       </Collapse>
//     </div>
//   );
// }

