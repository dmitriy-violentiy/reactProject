import React from "react";
import classes from './Post.module.css'

const Post = (props) => {
   return (
            <div className={classes.item}>
               <div>
                  <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png"/>
               </div>
               
               <div className={classes.item_info}>
                  <div>
                     {props.message}
                  </div>
                  <div>
                     <span><i>Likes:</i> <b><i>{props.like}</i></b></span>
                  </div>
               </div>
               
            </div>
   )
}

export default Post;