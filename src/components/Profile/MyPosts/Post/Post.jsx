import React from "react";
import classes from './Post.module.css'

const Post = () => {
   return (
            <div className={classes.item}>
               <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png"/>
               Post 1
               <div>
                  <span>like</span>
               </div>

            </div>
   )
}

export default Post;