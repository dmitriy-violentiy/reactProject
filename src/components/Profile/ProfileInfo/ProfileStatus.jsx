import React, { useEffect, useState } from "react";
import classes from './ProfileInfo.module.css'

const ProfileStatus = (props) => {

   let [editMode, setEditMode] = useState(false)      //присвоили в editMode - false, а в setEditMode функцию, меняющую это значение
   let [status, setStatus] = useState(props.status)

   useEffect( () => {
      setStatus(props.status)
   }, [props.status] )     //указали, что зависем от props.status и будем перерисовывать всегда, когда будет новый props.status отличаться от старого
   
   const activateEditMode = () => {
      setEditMode(true)
   }

   const deactivateEditMode = () => {
      setEditMode(false)
      props.updateStatus(status)     //обновляем статус, взяв его из value input-a
   } 

   const onStatusChange = (event) => {
      setStatus(event.currentTarget.value)
   }

   return (
      //условие вывода span или input
      <div>
         {  !editMode &&
            <div className={classes.statusWrap}>
               {props.status ? <span className={classes.status} onClick={activateEditMode}>
                  <b>My status: </b>{props.status}</span> : <span onDoubleClick={activateEditMode}><b>My status: </b>{props.status}empty status</span>}
            </div>
         }
         { editMode &&
            <div>
               <input onChange={ onStatusChange } autoFocus={true} onBlur={ deactivateEditMode } value={ status } />
            </div>
         }
      </div>
   )

}

export default ProfileStatus;