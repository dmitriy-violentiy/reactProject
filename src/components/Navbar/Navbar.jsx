import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Navbar.module.css'

const Navbar = () => {
   return (
      <nav className={classes.nav}>
         <div className={classes.item}>
            <NavLink to="/profile" className= { navData => navData.isActive ? classes.active : classes.item }>Profile</NavLink>
         </div>
         <div className={classes.item}>
            <NavLink to="/dialogs" className= { navData => navData.isActive ? classes.active : classes.item }>Messages</NavLink>
         </div>
         <div className={classes.item}>
            <NavLink to="/users" className= { navData => navData.isActive ? classes.active : classes.item }>Users</NavLink>
         </div>
      </nav>
   )
}

export default Navbar;