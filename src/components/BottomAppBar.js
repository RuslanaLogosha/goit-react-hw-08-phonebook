import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    marginTop: '30px',
  },
}));

export default function BottomAppBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar position="sticky" color="primary" className={classes.appBar}>
        <Toolbar></Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
