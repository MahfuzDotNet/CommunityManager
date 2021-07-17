import React from 'react';
import Collapse from '@material-ui/core/Collapse';
import {Typography} from "@material-ui/core";

const SuccessMessage = (success: any) => {
   return(    
    <Collapse in={success.open} timeout="auto" unmountOnExit>
      {(success.createStatus === 200) ? <Typography> Success</Typography> : <Typography>Failure</Typography>}
    </Collapse>
  )
}
export default SuccessMessage;
