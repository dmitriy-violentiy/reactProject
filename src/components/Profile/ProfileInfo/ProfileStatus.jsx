import React from "react";
import classes from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
   state = {
      editMode: false,      //режим редактирования в статусе
      status: this.props.status     //изначальное значение status берем из пропсов
   }
   
   activateEditMode = () => {
      console.log("this:", this)
      this.setState({
         editMode: true
      })
   } 
   deactivateEditMode = () => {
      this.setState({
         editMode: false
      })
      this.props.updateStatus(this.state.status)     //обновляем статус, взяв его из value input-a
   } 

   //узначем значение из input и заночим в локальный state
   onStatusChange = (event) => {
      this.setState({
         status: event.currentTarget.value
      })
   }

   //условие, по которому заносим новый статус, если новый не равен предыдущему
   componentDidUpdate(prevProps, prevState) {
      if(prevProps.status !== this.props.status) {
         this.setState({
            status: this.props.status
         })
      }
   }

   render() {
      return (
         //условие вывода span или input
         <div>
            {!this.state.editMode &&
               <div>
                  <span onDoubleClick={ this.activateEditMode }><b>Статус: </b>{this.props.status || "-----------"}</span>
               </div>
            }
            {this.state.editMode &&
               <div>
                  <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode } value={this.state.status}/>
               </div>
            }
         </div>
      )
   }
}

export default ProfileStatus;