import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Box } from '@mui/material';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export interface FailureDialogProps {
  open: boolean;
  errorCode?: number;
  handleClose: () => void;
  collection?: string;
}

function ErrorDialog(props: FailureDialogProps) {
  const { open, errorCode, handleClose, collection } = props;
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const errorText = () => {
    switch (errorCode) {
      case 1:
        return "No collection selected, please select a collection and try again.";
      case 2:
        return "The collection you selected is still loading. Please wait and try again.";
      case 3:
        return `Seems like you don’t have any ${collection} so there’s no need to bridge them. Don’t worry though, after the bridge closes you’ll be able to get your hands on some right here in the app. Stay tuned for that!`;
      case 4:
          return "The Factory is currently disabled. Please check back later.";
      default:
        return "Something went wrong. We are not sure exactly what. Please refresh the page. If this continues to happen, please open a ticket within the FOTF Discord.";
    }
  };

  const errorTitle = () => {
    switch (errorCode) {
      case 1:
        return "Error";
      case 2:
        return "Error";
      case 3:
        return `Whoops!`;
      case 4:
        return `Coming Soon!`;
      default:
        return "Error";
    }
  };

  const errorColor = () => {
    switch (errorCode) {
      case 1:
        return "red";
      case 2:
        return "red";
      case 3:
        return "#FED100";
      case 4:
        return "#FED100";
      default:
        return "red"
    }
  };

  
 
  
  return (
    <Box sx={{borderRadius:"0px"}}>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{borderRadius:"0px"}}
      >
        <DialogTitle sx={{
          backgroundColor: errorColor(), 
          color: "white", 
          margin: "0px",
          fontFamily: "Bebas Neue",
          fontSize: "30px"
        }}>
        {errorTitle()}
        {/* <Box sx={{position:"absolute", top: "5px", right: "5px", marginLeft: "auto"}} 
        >
          <Button sx={{color: "red", position:"absolute", top: "0px", right: "0px", marginLeft: "auto"}} 
          onClick={handleClose}>X</Button>
        </Box> */}
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ marginTop: "10px", fontSize: "24px", fontFamily: "Bebas Neue"}} id="alert-dialog-slide-description">
            {errorText()}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" sx={{
            fontFamily: "Bebas Neue",
            fontSize: "24px",
            marginBottom: "5px",
            backgroundColor: errorColor(),
            color: "white",
            borderColor: "white",
            borderWidth: "1px",
            "&:hover": {
              backgroundColor: "white",
              color: errorColor(),
              borderColor: errorColor(),
              borderWidth: "1px",
              borderStyle: "solid"
            }
          }}onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default ErrorDialog;