import React from "react"
import Friend from "./Friend/Friend"
import classes from './Friends.module.css'

const Friends = (props) => {
   let friendsElements = props.state.friends.map( (friend) => {
      return(
         <Friend friend={friend.name} id={friend.id}/>
      )
   } )
   
   return (
      <div>
         {friendsElements}
      </div>
      
   )
}

export default Friends;