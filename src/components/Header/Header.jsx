import React from "react";
import classes from './Header.module.css'
import { NavLink } from "react-router-dom";

const Header = (props) => {
   return (
      <header className={classes.header}>
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/934px-Twitter-logo.svg.png"/>

         <div className={classes.loginBlock}>
            { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
         </div>
      </header>
   )
}

export default Header;