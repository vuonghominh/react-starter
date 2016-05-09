import React from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions';

class Signin extends React.Component {
  handleFormSubmit({ admin_number, password }) {
    this.props.signinUser({admin_number, password});
  }

  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  render() {
    const { handleSubmit, fields: { admin_number, password}} = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Number:</label>
          <input {...admin_number} className="form-control"/>
        </fieldset>
        <fieldset className="form-group">
          <label>Password</label>
          <input {...password} type="password" className="form-control"/>
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

function mapStateToProps({ auth }) {
  return { errorMessage: auth.error}
}

export default reduxForm({
  form: 'signin',
  fields: ['admin_number', 'password']
}, mapStateToProps, actions)(Signin);
