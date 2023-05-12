import React from "react";
import classes from './Header.module.css'
import { NavLink } from "react-router-dom";

const Header = (props) => {
   return (
      <header className={classes.header}>
         <NavLink to={'/profile'}><img src="https://cdn-icons-png.flaticon.com/512/2927/2927418.png"/></NavLink>

         <div className={classes.loginBlock}>
            { props.isAuth 
               ? <div>{ props.login } <button onClick={props.logout}>Log out</button> </div>  
               : <NavLink to={'/login'}><button>LOGIN</button></NavLink> }
         </div>
      </header>
   )
}

export default Header;