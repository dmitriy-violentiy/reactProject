import React from "react";

import { Textarea } from "../../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Field, reduxForm } from "redux-form";

const maxLength50 = maxLengthCreator(50)

export const AddMessageForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field component={Textarea} validate={[required, maxLength50]} name={"newMessageArea"} placeholder={"Enter you message"} />
         </div>
         <div>
            <button>Add message </button>
         </div>
      </form>
   ) 
}

export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)