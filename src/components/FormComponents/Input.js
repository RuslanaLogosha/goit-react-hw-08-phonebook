import { TextField } from '@material-ui/core';
import React, { forwardRef } from 'react';

const Input = forwardRef((_, ref) => {
  return (
    <TextField variant="outlined" margin="normal" inputRef={ref} fullWidth />
  );
});
export default Input;
