import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewTicketForm(props) {

  function handleNewTicketFormSubmission(event){ // This can't use ES6 because it's a function INSIDE another function and not a class method.
    event.preventDefault(); //REMEMBER -- the default behavior of a submit button is to refresh the page!!
    props.onNewTicketCreation({names: event.target.value, location: event.target.value, issue: event.target.value, id: v4()});
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewTicketFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func // Remember that this.handleAddingNewTicketToList is passed down to the child component as onNewTicketCreation
}

export default NewTicketForm;