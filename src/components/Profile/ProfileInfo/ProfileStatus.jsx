import React from "react";
import classes from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
   state ={
      editMode: false      //режим редактирования в статусе
   }
   
   activateEditMode() {
      this.setState({
         editMode: true
      })
   } 
   deactivateEditMode() {
      this.setState({
         editMode: false
      })
   } 
   render() {
      return (
         //условие вывода span или input
         <div>
            {!this.state.editMode &&
               <div>
                  <span onDoubleClick={ this.activateEditMode.bind(this) }>{this.props.status}</span>
               </div>
            }
            {this.state.editMode &&
               <div>
                  <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
               </div>
            }
         </div>
      )
   }
}

export default ProfileStatus;