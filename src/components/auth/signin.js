import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';


class Signin extends Component {
    handleFormSubmit({ email, password }) {
        this.props.signinUser({ email, password });
    }

    renderAlert() {
        if(this.props.errorMesage){
            return (
               <div className="alert alert-danger">
                <strong>There is a problem: </strong> {this.props.errorMesage}
               </div> 
            );
        }
    }

    render() {
        const { handleSubmit, fields: { email, password }} = this.props;
        return (
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <fieldset className="form-group">
                <label>Email:</label>
                <input {...email} className="form-control" />
            </fieldset>
            <fieldset className="form-group">
                <label>Password:</label>
                <input {...password} type="password" className="form-control" />
            </fieldset>
            {this.renderAlert()}
            <button action="submit" className="btn btn-primary">
                Sign in
            </button>
        </form>
        );
    }
}

function mapStateToProps(state) {
    return { errorMesage: state.auth.error};
}

export default reduxForm({
    form: 'Signin',
    fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);
