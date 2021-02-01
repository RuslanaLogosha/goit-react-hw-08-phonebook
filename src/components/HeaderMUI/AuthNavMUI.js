import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Grid } from '@material-ui/core';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 900,
    fontSize: 18,
    color: '#faa346',
  },
  // activeLink: {
  //   color: '#732e4d',
  // },
};

export default function AuthNavMUI() {
  return (
    <>
      <NavLink
        to="/register"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Регистрация
      </NavLink>
  
      <NavLink
        to="/login"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Логин
      </NavLink>
     
    </>
  );
}
